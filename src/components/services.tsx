import { AnimatedTestimonials } from "./ui/animated-testimonials";


function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Explore our diverse selection of premium digital products. From entertainment to productivity, we have everything to enhance your digital lifestyle.",
      name: "Digital Products",
      designation: "Discover Exclusive Digital Deals",
      src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Enjoy access to the world’s best movies and TV shows. Unlock unlimited streaming with our Netflix subscriptions tailored for binge-watchers.",
      name: "Netflix",
      designation: "Stream Limitlessly with Netflix",
      src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Experience music like never before with Spotify. Access millions of tracks and curated playlists to set the perfect mood for every moment.",
      name: "Spotify",
      designation: "our Soundtrack, Your Way",
      src: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Dive into the ultimate music streaming experience with Apple Music. High-quality sound and exclusive content await you.",
      name: "Apple Music",
      designation: "A World of Music at Your Fingertips",
      src: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Elevate your video experience with YouTube Premium. Enjoy ad-free videos, background play, and exclusive content seamlessly.",
      name: "Youtube Premium",
      designation: "Ad-Free Viewing & More with YouTube Premium",
      src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Enhance your Discord experience with Nitro. Enjoy custom emojis, boosted servers, and high-quality streaming for your chats and gaming sessions.",
      name: "Discord Nitro",
      designation: "Stay Connected with Discord Nitro",
      src: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}


export default AnimatedTestimonialsDemo;