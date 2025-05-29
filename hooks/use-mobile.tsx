"use client"

import { useEffect, useState } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }

      // Initial check
      checkIsMobile()

      // Add event listener
      window.addEventListener("resize", checkIsMobile)

      // Clean up
      return () => {
        window.removeEventListener("resize", checkIsMobile)
      }
    }
  }, [])

  return isMobile
}

// Add the useMobile alias for backward compatibility
export const useMobile = useIsMobile
