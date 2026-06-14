import { useEffect } from "react";
import { API_BASE_URL } from "@/config";

export function useSEO(pagePath: string = "/") {
  useEffect(() => {
    async function fetchSEO() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/public/seo?pagePath=${encodeURIComponent(pagePath)}`);
        const result = await response.json();
        if (result.success && result.data) {
          const seo = result.data;
          
          // Update Title
          if (seo.title) {
            document.title = seo.title;
          }

          // Helper to set or create meta tag
          const setMetaTag = (name: string, content: string, isProperty: boolean = false) => {
            const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
            let el = document.querySelector(selector);
            if (!el) {
              el = document.createElement("meta");
              if (isProperty) {
                el.setAttribute("property", name);
              } else {
                el.setAttribute("name", name);
              }
              document.head.appendChild(el);
            }
            el.setAttribute("content", content);
          };

          // Meta description
          if (seo.description) {
            setMetaTag("description", seo.description);
            setMetaTag("og:description", seo.description, true);
          }

          // Meta keywords
          if (seo.keywords && Array.isArray(seo.keywords) && seo.keywords.length > 0) {
            setMetaTag("keywords", seo.keywords.join(", "));
          }

          // Canonical Link
          if (seo.canonicalUrl) {
            let canonicalLink = document.querySelector("link[rel='canonical']");
            if (!canonicalLink) {
              canonicalLink = document.createElement("link");
              canonicalLink.setAttribute("rel", "canonical");
              document.head.appendChild(canonicalLink);
            }
            canonicalLink.setAttribute("href", seo.canonicalUrl);
            setMetaTag("og:url", seo.canonicalUrl, true);
          }

          // OpenGraph Title
          if (seo.title) {
            setMetaTag("og:title", seo.title, true);
          }

          // OpenGraph Type
          if (seo.ogType) {
            setMetaTag("og:type", seo.ogType, true);
          }

          // OpenGraph Site Name
          if (seo.brandName) {
            setMetaTag("og:site_name", seo.brandName, true);
          }

          // OpenGraph Image
          if (seo.ogImage) {
            const absoluteOgImage = seo.ogImage.startsWith("http") 
              ? seo.ogImage 
              : `${API_BASE_URL}${seo.ogImage}`;
            setMetaTag("og:image", absoluteOgImage, true);
          }

          // Favicon Update
          if (seo.favicon) {
            const absoluteFavicon = seo.favicon.startsWith("http")
              ? seo.favicon
              : `${API_BASE_URL}${seo.favicon}`;
            
            // Determine MIME type based on file extension
            let mimeType = "image/x-icon";
            if (absoluteFavicon.endsWith(".png")) {
              mimeType = "image/png";
            } else if (absoluteFavicon.endsWith(".svg")) {
              mimeType = "image/svg+xml";
            } else if (absoluteFavicon.endsWith(".webp")) {
              mimeType = "image/webp";
            }

            // Remove existing icon tags to force Chrome/Firefox to re-evaluate
            const existingIcons = document.querySelectorAll("link[rel='icon'], link[rel='shortcut icon']");
            existingIcons.forEach(el => el.parentNode?.removeChild(el));

            // Create and append the new favicon link tag
            const newIcon = document.createElement("link");
            newIcon.setAttribute("rel", "icon");
            newIcon.setAttribute("type", mimeType);
            newIcon.setAttribute("href", `${absoluteFavicon}?v=${Date.now()}`);
            document.head.appendChild(newIcon);
          }
        }
      } catch (err) {
        console.error("Failed to load or apply SEO metadata:", err);
      }
    }

    fetchSEO();
  }, [pagePath]);
}
