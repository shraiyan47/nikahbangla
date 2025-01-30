import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users, MessageCircle, Shield, Moon, Star } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/cover-photo.webp"
            alt="Background"
            fill
            className="object-cover brightness-[0.3]"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            NikahBangla
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8">
            Finding your soulmate through faith and tradition
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white">
            Start Your Journey
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Why Choose NikahBangla?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Shield className="w-8 h-8 text-emerald-600" />}
            title="Privacy First"
            description="Your privacy is our top priority. All profiles are verified and protected."
          />
          <FeatureCard 
            icon={<Moon className="w-8 h-8 text-emerald-600" />}
            title="Islamic Values"
            description="Our platform adheres to Islamic principles and cultural values."
          />
          <FeatureCard 
            icon={<Users className="w-8 h-8 text-emerald-600" />}
            title="Quality Matches"
            description="Connect with educated, cultured Bengali Muslim singles."
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="10,000+" label="Active Members" />
            <StatCard number="1,000+" label="Success Stories" />
            <StatCard number="100%" label="Profile Verification" />
            <StatCard number="24/7" label="Support" />
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <Card className="p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2 relative h-[300px]">
              <Image
                src="/cover-photo-3.webp"
                alt="Happy Couple"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <CardTitle className="mb-4">Our Success Story</CardTitle>
              <CardDescription className="text-base mb-6">
                "Alhamdulillah, we found each other through NikahBangla. The platform's focus on Islamic values and Bengali culture helped us connect meaningfully. We're now happily married for 2 years."
              </CardDescription>
              <p className="font-semibold">- Fatima & Ahmed, Dhaka</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NikahBangla</h3>
              <p className="text-sm text-emerald-300">
                Your trusted platform for halal matrimony in Bangladesh.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">How It Works</a></li>
                <li><a href="#" className="hover:text-white">Success Stories</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p className="text-sm text-emerald-300 mb-2">
                Dhaka, Bangladesh
              </p>
              <p className="text-sm text-emerald-300">
                support@nikahbangla.com
              </p>
            </div>
          </div>
          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-sm">
            <p>© 2024 NikahBangla. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode
  title: string
  description: string 
}) {
  return (
    <Card className="hover:shadow-lg transition duration-300">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold mb-2">{number}</div>
      <div className="text-emerald-200">{label}</div>
    </div>
  )
}