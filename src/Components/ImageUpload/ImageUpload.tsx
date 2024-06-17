import axios from "@services/instance";
import { useState } from "react";
import { toast } from "ui/atom/Toast/ToastManager";
import './ImageUpload.css';
const ImageUpload = () => {
    const [file, setFile] = useState<File[] | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        const selectedFile = Array.from(event.target.files ?? [])
        console.log(event.target.files)
        setFile(selectedFile);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('type', 'PROFILE')
        file?.forEach((f) => {
            formData.append('file', f)
        })

        try {
            const response = await axios.post('/media', formData
                , {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            console.log(response?.data)
            toast.show({
                title: 'Operation Successful',
                content: "success",
                duration: 5000,  // Duration in milliseconds,
                type: 'success'
            });
        } catch (error) {
            console.log('Error uploading image:', error);
            toast.show({
                title: 'Operation failure',
                content: "failure",
                duration: 5000,  // Duration in milliseconds,
                type: 'error'
            });

        }
    };

    return (
        <div className="upload-media">
            <label htmlFor="upload" >Upload media here</label>
            <input type="file" id="upload" onChange={handleFileChange} accept="image/*" />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ImageUpload;