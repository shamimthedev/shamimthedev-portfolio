import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Md. Shamim Hossain - Frontend Engineer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

// Image generation
export default async function Image() {
  // Fetch your profile image from the public directory
  // Make sure you have profile-image.png in your /public folder
  const imageData = await fetch(
    new URL('https://shamimthedev.vercel.app/profile-image.png')
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 80px',
          position: 'relative',
        }}
      >
        {/* Left side - Photo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={imageData as unknown as string}
            alt="Md. Shamim Hossain"
            width={380}
            height={380}
            style={{
              borderRadius: '50%',
              border: '6px solid #374151',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Right side - Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '600px',
            marginLeft: '60px',
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Md. Shamim Hossain
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#60A5FA',
              fontWeight: '600',
              marginBottom: 20,
            }}
          >
            Frontend Engineer
          </div>
          <div
            style={{
              fontSize: 24,
              color: '#9CA3AF',
              lineHeight: 1.4,
            }}
          >
            Building fast, scalable web applications with Next.js & TypeScript
          </div>
        </div>

        {/* Subtle accent line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #60A5FA 0%, #3B82F6 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}