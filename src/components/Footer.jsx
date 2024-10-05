import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <NavigationMenu className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-24 ml-8 pl-6">
        
        {/* About Section */}
        <NavigationMenuList className="md:w-[55vh]">
          <NavigationMenuItem>   
            <h2 className="text-md pt-1 pb-4">
              We are a team of passionate educators and developers committed to making quality education accessible to all. Our platform is designed to provide students with the tools they need to excel in computer science and beyond. Join us in building a brighter future through learning and innovation.
            </h2>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <p className="text-left text-sm mt-4 pt-4">
              © 2024 Your Company. All rights reserved.
            </p>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Courses Section */}
        <NavigationMenuList className="flex-1">
          <h2 className="text-lg font-bold mb-4">Courses</h2>
          <NavigationMenuItem className="mb-1">
            <NavigationMenuLink href="/#courses">Data Structures</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-1">
            <NavigationMenuLink href="/#courses">Algorithms</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-1">
            <NavigationMenuLink href="/#courses">Web Development</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-1">
            <NavigationMenuLink href="/#courses">Java</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-1">
            <NavigationMenuLink href="/#courses">Database Systems</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-1">
            <NavigationMenuLink href="/#courses">Operating System</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Quick Links Section */}
        <NavigationMenuList className="flex-1">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <NavigationMenuItem className="mb-1">
            <NavigationMenuLink href="/">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-1">
            <NavigationMenuLink href="/about">About Us</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-1">
            <NavigationMenuLink href="/contact">Contact Us</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-1">
            <NavigationMenuLink href="">Privacy Policy</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-1">
            <NavigationMenuLink href="">Terms of Service</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* Contact Section */}
        <NavigationMenuList className="flex-1">
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <NavigationMenuItem className="mb-1">
            Address: 02, R.K. Nagar, Sector-3, New Delhi - 110085, Delhi, India
          </NavigationMenuItem>
          <NavigationMenuItem className="mb-1">Phone: +91 8218765495</NavigationMenuItem>
          <NavigationMenuItem className="mb-1">Mail: enrollment@ourplatform.com</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </footer>
  );
}
