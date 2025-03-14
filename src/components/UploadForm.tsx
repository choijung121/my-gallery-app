"use client"

import { useState } from "react"

export default function UploadForm() {
    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [uploading, setUploading] = useState(false)
    const [uploadedUrl, setUploadedUrl] = useState("")

    const handleFileChange = (event: any) => {
        const selectedFile = event.target.files[0]
        setFile(selectedFile)
        setPreview(URL.createObjectURL(selectedFile))
    }

    const handleUpload = async () => {
        if (!file) return alert("Please select an image!")
    
        setUploading(true)
        const formData = new FormData()
        formData.append("file", file)
    
        try {
          const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });
    
          const data = await res.json()
          if (res.ok) {
            setUploadedUrl(data.url)
          } else {
            alert("Upload failed: " + data.error)
          }
        } catch (error) {
          console.error("Upload error:", error)
        } finally {
          setUploading(false)
        }
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <input type="file" onChange={handleFileChange} />
            {preview && <img src={preview} alt="Preview" className="w-32 h-32 object-cover" />}
            <button
                onClick={handleUpload}
                disabled={uploading}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                {uploading ? "Uploading..." : "Upload"}
            </button>
            {uploadedUrl && (
                <div>
                <p>Uploaded Image:</p>
                <img src={uploadedUrl} alt="Uploaded" className="w-32 h-32 object-cover" />
                </div>
            )}
        </div>
    )
}