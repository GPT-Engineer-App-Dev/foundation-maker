import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Your Bare-Bones App</h1>
      <p className="text-lg">Start building your application here.</p>
      <div className="mx-auto object-cover w-full h-[400px]">
        <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
      </div>
      <p className="text-md">This is a minimal web application. Modify and build upon it to suit your needs.</p>
      <Button>Get Started</Button>
      <footer className="mt-8 text-sm text-muted-foreground">
        © 2023 Your Bare-Bones App
      </footer>
    </div>
  );
};

export default Index;