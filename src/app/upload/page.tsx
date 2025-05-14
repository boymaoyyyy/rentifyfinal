'use client';

import { useState, useRef } from 'react';

export default function UploadPage() {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    cellphone: '',
  });
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    if (!file.type.includes('image/')) {
      setMessage('Please select an image file');
      return;
    }

    // File size validation (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setMessage('Image size must be less than 5MB');
      return;
    }

    setSelectedFile(file);
    setMessage('');

    // Create preview
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      setMessage('Please select an image');
      return;
    }
    
    setLoading(true);
    setMessage('');

    // Create form data for multipart/form-data submission
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('price', form.price);
    formData.append('cellphone', form.cellphone);
    formData.append('image', selectedFile);

    try {
      const res = await fetch('/api/products/upload', {
        method: 'POST',
        body: formData,
        // Don't set Content-Type header, let the browser set it with the boundary
      });

      const data = await res.json();

      if (res.ok) {
        setMessage('Product uploaded successfully!');
        setForm({ name: '', description: '', price: '', cellphone: '' });
        setSelectedFile(null);
        setImagePreview(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setMessage(data.message || 'Failed to upload product.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setMessage('Error uploading product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload a Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Product Description"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price (Per day)"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="cellphone"
          value={form.cellphone}
          onChange={handleChange}
          placeholder="Cellphone Number"
          required
          className="w-full border p-2 rounded"
        />
        
        {/* Image Upload Section */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded file:border-0
                file:text-sm file:font-semibold
                file:bg-black file:text-white
                hover:file:bg-gray-800"
            />
          </div>
          
          {/* Image Preview */}
          {imagePreview && (
            <div className="mt-2">
              <img 
                src={imagePreview} 
                alt="Preview" 
                className="w-full max-h-64 object-contain border rounded"
              />
            </div>
          )}
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 disabled:bg-gray-400"
        >
          {loading ? 'Uploading...' : 'Upload Product'}
        </button>
        {message && (
          <p className={`text-sm mt-2 ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}