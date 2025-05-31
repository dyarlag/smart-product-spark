
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatGPT from "@/components/chat/ChatGPT";

const ChatGPTPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-theme-blue mb-4">
            AI Assistant
          </h1>
          <p className="text-theme-text max-w-2xl mx-auto">
            Connect with ChatGPT to get AI-powered responses to your questions and ideas.
          </p>
        </div>
        <ChatGPT />
      </main>
      <Footer />
    </div>
  );
};

export default ChatGPTPage;
