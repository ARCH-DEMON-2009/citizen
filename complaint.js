const existingComplaints = JSON.parse(localStorage.getItem('complaints')) || [
    { id: 'S1234', name: 'John Doe', block: 'सढोली कदीम', department: 'लोक निर्माण विभाग', phone: '9876543210', complaint: 'Noise complaint.', status: 'Resolved', resolution: 'प्रिय उपयोगकर्ता, आपकी शिकायत सफलतापूर्वक प्राप्त हो गई है। हमारी टीम आपकी समस्या पर शीघ्र कार्रवाई करेगी। धन्यवाद!.' },
    { id: 'S5678', name: 'Jane Smith', block: 'Block 2', department: 'Health', phone: '0987654321', complaint: 'Sanitation issue.', status: 'In Progress', resolution: 'Not Yet Resolved' },
    { id: 'S1111', name: 'रमेश कुमार', block: 'Block 3', department: 'Health', phone: '1234509876', complaint: 'स्वास्थ्य समस्या।', status: 'Resolved', resolution: 'समस्या सुलझाई गई।' },
    { id: 'S1111', name: 'Ashok Kumar', block: 'सढोली कदीम', department: 'लोक निर्माण विभाग', phone: '9876543210', complaint: 'Complaint.', status: 'Complete', resolution: 'प्रिय उपयोगकर्ता, आपकी शिकायत सफलतापूर्वक प्राप्त हो गई है। हमारी टीम आपकी समस्या पर शीघ्र कार्रवाई करेगी। धन्यवाद!.' },

{ id: 'S1112', name: 'Pankaj Mishra', block: 'मुज़फ़्फ़राबाद', department: 'नगर निगम', phone: '9876543211', complaint: 'Complaint.', status: 'Complete', resolution: 'प्रिय उपयोगकर्ता, आपकी शिकायत पर समीक्षा की जा रही है। हम इसे जल्द से जल्द हल करने की प्रक्रिया में हैं। आपकी सहनशीलता के लिए धन्यवाद।.' },

    { id: 'S1113', name: 'aarti singh', block: 'पुंवारका', department: 'जल विभाग', phone: '9876543212', complaint: 'Complaint.', status: 'Complete', resolution: 'प्रिय उपयोगकर्ता, आपकी शिकायत पर कार्रवाई शुरू कर दी गई है और यह प्रगति पर है। हमारी टीम इसे शीघ्र हल करने का प्रयास कर रही है। कृपया धैर्य बनाए रखें।.' },
    
    { id: 'S1114', name: 'Sunil Verma', block: 'बलियाखेड़ी', department: 'बिजली विभाग', phone: '9876543213', complaint: 'Complaint.', status: 'Complete', resolution: 'प्रिय उपयोगकर्ता, आपकी शिकायत पर कार्रवाई शुरू कर दी गई है और यह प्रगति पर है। हमारी टीम इसे शीघ्र हल करने का प्रयास कर रही है। कृपया धैर्य बनाए रखें।.' },

{ id: 'S1115', name: 'Nitu Agarwal', block: 'नानौता', department: 'शिक्षा विभाग', phone: '9876543214', complaint: 'Complaint.', status: 'Complete', resolution: 'प्रिय उपयोगकर्ता, आपकी शिकायत का समाधान कर दिया गया है। हमें उम्मीद है कि आपकी समस्या का समाधान संतोषजनक रहा। आपकी प्रतिक्रिया हमारे लिए महत्वपूर्ण है। धन्यवाद!.' },

{ id: 'S1116', name: 'Rekha chaudhary', block: 'देवबंद', department: 'स्वास्थ्य विभाग', phone: '9876543215', complaint: 'Complaint.', status: 'Complete', resolution: 'प्रिय उपयोगकर्ता, आपकी शिकायत को बंद कर दिया गया है। यदि आपकी समस्या अभी भी बनी हुई है या आप कोई नई शिकायत दर्ज करना चाहते हैं, तो कृपया पुनः संपर्क करें। धन्यवाद!.' },

{ id: 'S1117', name: 'rakesh Yadav', block: 'रामपुर', department: 'कृषि विभाग', phone: '9876543216', complaint: 'Complaint.', status: 'Complete', resolution: 'प्रिय उपयोगकर्ता, आपकी शिकायत का समाधान किया गया है। कृपया हमें अपनी प्रतिक्रिया दें ताकि हम अपनी सेवाओं में और सुधार कर सकें। आपकी प्रतिक्रिया हमारे लिए मूल्यवान है। धन्यवाद!.' },

{ id: 'S1118', name: 'Amit Kumar', block: 'नागल', department: 'परिवहन विभाग', phone: '9876543217', complaint: 'Complaint.', status: 'In Progress', resolution: '.' },

{ id: 'S1119', name: 'Ashok Kumar', block: 'सढोली कदीम', department: 'लोक निर्माण विभाग', phone: '9876543218', complaint: 'Complaint.', status: 'In Progress', resolution: '.' },

{ id: 'S1120', name: 'Ashok Kumar', block: 'सढोली कदीम', department: 'लोक निर्माण विभाग', phone: '9876543219', complaint: 'Complaint.', status: 'In Progress', resolution: '.' },

{ id: 'S1121', name: 'Ashok Kumar', block: 'सढोली कदीम', department: 'लोक निर्माण विभाग', phone: '9876543220', complaint: 'Complaint.', status: 'In Progress', resolution: '.' },

{ id: 'S1122', name: 'Ashok Kumar', block: 'सढोली कदीम', department: 'लोक निर्माण विभाग', phone: '9876543221', complaint: 'Complaint.', status: 'In Progress', resolution: '.' },
];

const updateComplaintsInStorage = (complaints) => {
    localStorage.setItem('complaints', JSON.stringify(complaints));
};

updateComplaintsInStorage(existingComplaints);

document.getElementById('complaintForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const complaintId = 'S' + Math.floor(Math.random() * 10000);
    const newComplaint = {
        id: complaintId,
        name: document.getElementById('name').value,
        block: document.getElementById('block').value,
        department: document.getElementById('department').value,
        phone: document.getElementById('phone').value,
        complaint: document.getElementById('complaint').value,
        status: 'In Progress',
        resolution: 'Not Yet Resolved',
    };

    existingComplaints.push(newComplaint);
    updateComplaintsInStorage(existingComplaints);

    // Redirect to confirmation page with query parameters
    const params = new URLSearchParams(newComplaint).toString();
    window.location.href = `confirmation.html?${params}`;
});
