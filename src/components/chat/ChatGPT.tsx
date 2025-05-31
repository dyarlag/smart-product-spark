
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

const ChatGPT = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const sendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('chatgpt', {
        body: { message }
      });

      if (error) {
        throw error;
      }

      setResponse(data.response);
      toast({
        title: "Success",
        description: "Message sent to ChatGPT successfully!"
      });
    } catch (error) {
      console.error('Error calling ChatGPT:', error);
      toast({
        title: "Error",
        description: "Failed to send message to ChatGPT. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4 max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-theme-blue">Chat with GPT</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Your Message
            </label>
            <Textarea
              id="message"
              placeholder="Ask ChatGPT anything..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-[100px]"
            />
          </div>
          
          <Button 
            onClick={sendMessage} 
            disabled={isLoading || !message.trim()}
            className="w-full bg-theme-teal hover:bg-opacity-90"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
          
          {response && (
            <div className="space-y-2">
              <label className="text-sm font-medium">ChatGPT Response:</label>
              <div className="p-4 bg-theme-light-blue rounded-lg border">
                <p className="whitespace-pre-wrap">{response}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ChatGPT;
