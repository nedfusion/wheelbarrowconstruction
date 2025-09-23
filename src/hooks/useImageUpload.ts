import { useState } from 'react';

interface UploadResult {
  url: string;
  id: string;
}

export const useImageUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadImage = async (file: File): Promise<UploadResult> => {
    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Create FormData for file upload
      const formData = new FormData();
      formData.append('file', file);

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      // In production, replace this with actual upload to your storage service
      // Example: AWS S3, Cloudinary, or your own server
      const mockUpload = new Promise<UploadResult>((resolve) => {
        setTimeout(() => {
          clearInterval(progressInterval);
          setUploadProgress(100);
          
          // Generate a mock URL - in production, this would be the actual uploaded file URL
          const mockUrl = URL.createObjectURL(file);
          const mockId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
          
          resolve({
            url: mockUrl,
            id: mockId
          });
        }, 2000);
      });

      const result = await mockUpload;
      return result;

    } catch (error) {
      console.error('Upload failed:', error);
      throw new Error('Failed to upload image');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const uploadMultipleImages = async (files: File[]): Promise<UploadResult[]> => {
    const results: UploadResult[] = [];
    
    for (const file of files) {
      try {
        const result = await uploadImage(file);
        results.push(result);
      } catch (error) {
        console.error(`Failed to upload ${file.name}:`, error);
      }
    }
    
    return results;
  };

  return {
    uploadImage,
    uploadMultipleImages,
    isUploading,
    uploadProgress
  };
};