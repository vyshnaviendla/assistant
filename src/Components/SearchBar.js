import React, { useState } from 'react';

const jsonData = {
  "data": [
    {
      "question": "I lost my bike. What do I do?",
      "answer": "If your bike is lost, you should immediately file a First Information Report (FIR) at the nearest police station. Provide all the necessary details about the bike and the circumstances of its loss. Additionally, inform your insurance company about the incident."
    },
    {
      "question": "Hi",
      "answer": "Hello!"
    },
    {
      "question": "What are my rights if I am arrested?",
      "answer": "If you are arrested, you have the right to remain silent and consult with a lawyer. You should be informed of the charges against you. It is advisable not to make any statements without legal representation. Exercise your right to legal counsel during questioning."
    },
    {
      "question": "How can I create a valid will in India?",
      "answer": "To create a valid will in India, you should be of sound mind and sign the document in the presence of at least two witnesses. The witnesses should also sign the will. It is advisable to register the will to ensure its authenticity. Consulting with a lawyer is recommended to ensure compliance with legal requirements."
    },
    {
      "question": "What should I do if I'm facing workplace harassment?",
      "answer": "If you are facing workplace harassment, document the incidents and report them to your employer's internal complaints committee, if available. If the issue persists, you can file a complaint with the local sexual harassment ombudsman. Consult with a legal professional for guidance on the appropriate course of action."
    },
    {
      "question": "How can I protect my intellectual property in India?",
      "answer": "To protect your intellectual property in India, you can register trademarks, copyrights, and patents with the relevant authorities. It is advisable to conduct thorough research and seek legal advice to ensure proper protection. Enforcing your intellectual property rights may require legal action in case of infringement."
    },
    {
      "question": "What are the legal requirements for starting a business in India?",
      "answer": "To start a business in India, you need to register your company with the Ministry of Corporate Affairs, obtain the necessary business licenses, and comply with tax regulations. Consulting with a legal expert can help ensure that you meet all legal requirements."
    },
    {
      "question": "How can I dispute a property dispute with my neighbor?",
      "answer": "If you have a property dispute with your neighbor, attempt to resolve it amicably. If unsuccessful, consult with a lawyer and consider mediation. If needed, file a suit in the appropriate civil court. Providing evidence and documentation is crucial to supporting your case."
    },
    {
      "question": "What are the legal implications of defaulting on a loan in India?",
      "answer": "Defaulting on a loan in India can lead to legal action by the lender. They may initiate recovery proceedings, which could include filing a case in the Debt Recovery Tribunal (DRT). It is advisable to communicate with the lender and explore options like loan restructuring before legal action is taken."
    },
    {
      "question": "How can I protect my online business from cyber threats under Indian law?",
      "answer": "To protect your online business from cyber threats in India, implement robust cybersecurity measures. Comply with the Information Technology Act and rules, including data protection and privacy regulations. Regularly update security protocols and educate employees about cyber threats to minimize risks."
    },
    
      {
      "question": "How can I effectively communicate with my team members?",
      "answer": "Effective communication with your team involves active listening, clear expression of ideas, and providing constructive feedback. Regular team meetings and open channels of communication contribute to a collaborative work environment."
    },
    {
      "question": "What steps can I take to enhance my professional skills?",
      "answer": "Enhancing professional skills involves continuous learning and development. Attend workshops, take online courses, and seek mentorship opportunities. Stay updated on industry trends and technologies relevant to your field."
    },
    {
      "question": "How do I handle a heavy workload and meet deadlines?",
      "answer": "Managing a heavy workload requires effective time management. Prioritize tasks, break them into smaller steps, and set realistic deadlines. Communicate with your supervisor if you need additional resources or support to meet deadlines."
    },
    {
      "question": "What should I do if I feel unfulfilled in my current role?",
      "answer": "If you feel unfulfilled in your current role, consider exploring new projects, responsibilities, or additional training opportunities. Have a conversation with your supervisor about your career goals and potential avenues for growth within the company."
    },
    {
      "question": "How can I build a positive work culture within my team?",
      "answer": "Building a positive work culture involves fostering teamwork, recognizing achievements, and promoting open communication. Encourage a supportive and inclusive environment where team members feel valued and motivated."
    }



  ]
}

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const [answer, setAnswer] = useState("");
  const [isContainerVisible, setContainerVisible] = useState(false);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      findAnswer(searchValue);
      setContainerVisible(true);
    }
  };

  const findAnswer = (searchValue) => {
    const words = searchValue.toLowerCase().split(' ');
    let maxCount = 0;
    let maxCountAnswer = "Data not found";

    jsonData.data.forEach(item => {
      const questionWords = item.question.toLowerCase().split(' ');
      const count = words.reduce((acc, word) => acc + questionWords.includes(word), 0);

      if (count > maxCount) {
        maxCount = count;
        maxCountAnswer = item.answer;
      }
    });

    setAnswer(maxCountAnswer);
  };

  return (
    <div>
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search Anything You Want."
          value={searchValue}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        <button className="srchbtn" onClick={() => { findAnswer(searchValue); setContainerVisible(true); }}>Search</button>
      </div>
      {isContainerVisible &&
        <div className='container-class' style={{ "backgroundColor": "grey", "borderRadius": "20px" }}>
          <h5 style={{ "color": "black" }}>{answer}</h5>
        </div>
      }
    </div>
  );
}

export default SearchBar;