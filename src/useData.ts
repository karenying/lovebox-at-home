import { useEffect, useState } from "react";

import axios from "axios";

interface Message {
  content: string;
  timestamp: string;
}

const useData = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    axios.get("/api/messages").then((response) => {
      setMessages(response.data);
    });
  }, []);

  const currentMessage = messages[0];
  const pastMessages = messages.slice(1);

  return { currentMessage, pastMessages };
};

export default useData;
