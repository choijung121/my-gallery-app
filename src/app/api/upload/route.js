import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(request) {
    try {
        const formData = await request.formData()
        const file = formData.get("file")

        if(!file) {
            return NextResponse.json({ error: "File not provided" }, { status: 400 })
        }

        // Convert file to buffer
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        // Upload to Cloudinary
        const result = await new Promise((resolve, reject) => {
            cloudinary.uploader.upload_stream(
                { folder: "gallery" },
                (error, uploadedFile) => {
                    if (error) reject(error)
                    else resolve(uploadedFile)
                }
            ).end(buffer)
        })

        return NextResponse.json({ url: result.secure_url }, { status: 200 })
    } catch (error) {
        console.error("Upload error:", error)
        return NextResponse.json({ error: "Upload failed" }, { status: 500 })
    }
}