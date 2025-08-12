import { Play, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Video editing workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95 dark:from-background/98 dark:via-background/90 dark:to-background/98" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <div className="space-y-6">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Raj Chaudhari
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
            Video Editor & Motion Graphics Artist
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Bringing stories to life through compelling visuals, seamless
            editing, and stunning motion graphics. Transforming raw footage into
            cinematic experiences.
          </p>

          {/* CTA Buttons */}
          <div className="pt-8 space-y-4">
            {/* First Row: View My Work + Get In Touch */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="btn-creative group"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View My Work
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="hover:bg-accent/50 hover:scale-105 transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Second Row: Resume Button */}
            <div className="flex justify-center">
              <a href="/resume.pdf" download>
                <Button
                  variant="secondary"
                  size="lg"
                  className="hover:bg-accent/50 hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="pt-12 animate-slide-up">
            <p className="text-sm text-muted-foreground mb-4">Specialized in</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                // Design Tools
                "Photoshop",
                "Illustrator",
                "CorelDRAW",
                "InDesign",
                "Figma",

                // Video & Motion
                "After Effects",
                "Premiere Pro",
                "Animate CC",

                // 3D, Animation & Interior Design
                "Maya",
                "Blender",
                "Substance Painter",
                "Unreal Engine",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full text-sm border border-border/50 hover:bg-accent/50 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-creative-blue/20 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-creative-pink/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 right-20 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
}
