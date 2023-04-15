import { createChatBotMessage } from "react-chatbot-kit";
import Chat from "./widgets/Chat";
// import Overview from "./widgets/Overview";
// import GlobalStatistics from "./widgets/GlobalStatistics";
// import LocalStatistics from "./widgets/LocalStatistics";
// import Contact from "./widgets/Contact";
// import MedicineDelivery from "./widgets/MedicineDelivery";
import CoBotAvatar from "./CoBotAvatar";








const config = {
  lang: "no",
  botName: "CoBot",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#04668a"
    },
    chatButton: {
      backgroundColor: "#0f5faf"
    }
  },
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm here to provide you with latest COVID 19 data to keep you safe!`
    ),
    createChatBotMessage(
      "Please start chatting with me about your health problems",
      {
        withAvatar: false,
        delay: 400,
        widget: "chat"
      }
    )
  ],
  state: {},
  customComponents: { botAvatar: (props) => <CoBotAvatar {...props} /> },
  widgets: [
    // {
    //   widgetName: "chat",
    //   widgetFunc: async (props) => {
    //     if (props.messages)
    //       await getChatResponse(props.messages);
    //     // Your chat widget logic goes here, using the response from the API call
    //   },
    //   mapStateToProps: ["messages"]
    // }
    {
      widgetName: "chat",
      widgetFunc: (props) => <Chat {...props} />,
      mapStateToProps: ["messages"]
    }//,
    // {
    //   widgetName: "globalStatistics",
    //   widgetFunc: (props) => <GlobalStatistics />
    // },
    // {
    //   widgetName: "localStatistics",
    //   widgetFunc: (props) => <LocalStatistics />
    // },
    // {
    //   widgetName: "emergencyContact",
    //   widgetFunc: (props) => <Contact />
    // },
    // {
    //   widgetName: "medicineDelivery",
    //   widgetFunc: (props) => <MedicineDelivery />
    // }
  ]
};

export default config;
