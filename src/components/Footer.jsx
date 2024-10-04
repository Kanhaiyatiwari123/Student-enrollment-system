import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <NavigationMenu className="flex space-x-24 ml-8 pl-10">
        <NavigationMenuList className="w-[55vh] ml-5 pl-5">
            <NavigationMenuItem>   
                <h2 className="text-md pt-1 pb-4">We are a team of passionate educators and developers committed to making quality education accessible to all. Our platform is designed to provide students with the tools they need to excel in computer science and beyond. Join us in building a brighter future through learning and innovation.</h2>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <p className="text-left text-sm mt-4 pt-4">© 2024 Your Company. All rights reserved.</p>
            </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuList>
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

        <NavigationMenuList>
          <h2 className="text-lg font-bold mb-4">Ouick Links</h2>
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

        <NavigationMenuList>
          <NavigationMenuItem>
            Address: 02, R.K. Nagar, Sector-3, New Delhi - 110085, Delhi, India
          </NavigationMenuItem>
          <NavigationMenuItem>Phone: +91 8218765495</NavigationMenuItem>
          <NavigationMenuItem>Mail: enrollment@ourplatform.com</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </footer>
  );
}
