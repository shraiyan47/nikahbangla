import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Heart,
  Users,
  MessageCircle,
  Shield,
  Moon,
  Star,
  MoonStarIcon,
  StarsIcon,
} from "lucide-react";
import SuccessStories from "@/components/ui/successStories";

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
            নিকাহ বাংলা - হালাল ম্যাট্রিমোনি
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100 mb-8">
            {/* Finding your soulmate through faith and tradition in Bangladesh. */}
            খুব সহজেই আপনার জীবনসঙ্গী খুঁজে পান আমাদের সাথে।
          </p>
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            এখনই শুরু করুন
          </Button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          আমাদের কাজ
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          নিকাহ বাংলা একটি হালাল ম্যাট্রিমোনি প্ল্যাটফর্ম। আমরা ইসলামিক মূল্যবোধ
          এবং সাংস্কৃতিক মানুষের সাথে মেলা দিতে প্রতিশ্রুতিবদ্ধ। আমাদের
          প্ল্যাটফর্মে আপনি আপনার জীবনসঙ্গী খুঁজতে পারেন এবং সম্পর্ক স্থাপন করতে
          পারেন।
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            imgSrc="/kazi/program2.jpg"
            title="কাজী সার্ভিস"
            description="আমাদের প্ল্যাটফর্মে কাজী সার্ভিস পাওয়া যায়। সরকারী বিধিমালা অনুযায়ী নিকাহ সম্পন্ন করা হয়।"
          />
          <FeatureCard
            imgSrc="/kazi/program1.jpg"
            title="জীবনসঙ্গী খুজে দেওয়া"
            description=" আমাদের প্ল্যাটফর্মে আপনি আপনার জীবনসঙ্গী খুঁজতে পারেন এবং সম্পর্ক স্থাপন করতে পারেন।"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          কেন নিকাহ বাংলা?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<MoonStarIcon className="w-8 h-8 text-emerald-600" />}
            title="ইসলামিক মূল্যবোধ"
            description="আমাদের প্ল্যাটফর্ম ইসলামিক মূল্যবোধ এবং সাংস্কৃতিক মানুষের সাথে মেলে।"
          />
          <FeatureCard
            icon={<StarsIcon className="w-8 h-8 text-emerald-600" />}
            title="গুণগত মান"
            description="শিক্ষিত, সংস্কৃত বাংলা মুসলিম সিঙ্গেলদের সাথে সংযোগ করানো হয়।"
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-emerald-600" />}
            title="সম্পর্ক স্থাপন"
            description="আমাদের প্ল্যাটফর্মে আপনি আপনার জীবনসঙ্গী খুঁজতে পারেন এবং সম্পর্ক স্থাপন করতে পারেন।"
          />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-emerald-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatCard number="৫০০ এর অধিক" label="বিবাহ সম্পন্ন করার অভিজ্ঞতা" />
            <StatCard number="১০,০০০ এর অধিক" label="পাত্র-পাত্রীর প্রোফাইল" />
            <StatCard number="১০০ এর অধিক" label="পাত্র-পাত্রীর সম্পর্ক স্থাপন" />
            <StatCard number="১০০%" label=" সফলতা " />
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      {/* <section className="py-16 px-4 max-w-7xl mx-auto">
        <Card className="p-8 md:p-12" id='success-story-1'>
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
      </section> */}

      <SuccessStories />

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NikahBangla</h3>
              <p className="text-sm text-emerald-300 mb-3">
                Your trusted platform for halal matrimony in Bangladesh.
              </p> 
              <h3 className="text-xl font-bold mb-4">নিকাহবাংলা</h3>
              <p className="text-sm text-emerald-300 mb-2">
                বাংলাদেশে হালাল ম্যাট্রিমোনির জন্য আপনার বিশ্বাসিত প্ল্যাটফর্ম।
              </p>
            </div>
            {/* <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div> */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <p className="text-sm text-emerald-300 mb-2">Dhaka, Bangladesh</p>
              <p className="text-sm text-emerald-300">
                support@nikahbangla.com
              </p>
            </div>
          </div>
          <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-sm">
            <p>© 2024 GREEN TECH ZONE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  imgSrc,
  icon,
  title,
  description,
}: {
  imgSrc?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="hover:shadow-lg transition duration-300">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt="Background"
              width={1000}
              height={1000}
              className="w-full h-[250px] object-cover rounded-lg mb-4"
            />
          ) : null}

          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold mb-2">{number}</div>
      <div className="text-emerald-200">{label}</div>
    </div>
  );
}
