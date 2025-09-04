import { Button } from '@/components/ui/button';

export default function WelcomeSection() {
  return (
    <div className="h-full flex flex-col justify-end pb-20 px-8">
      {/* Welcome Text with Animation */}
      <h1 className="animate-fade-in mb-8 text-8xl">Welcome</h1>

      {/* Subheading and CTAs */}
      <div className="animate-slide-up-delayed">
        {/* Subheading */}
        <p className="text-lg text-gray-900 mb-8 max-w-md leading-relaxed">
          Experience the perfect blend of wellness and beauty in our serene,
          state-of-the-art medical spa
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="min-w-[160px] rounded-full">
            Book Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="min-w-[160px] rounded-full"
          >
            View Services
          </Button>
        </div>
      </div>
    </div>
  );
}
