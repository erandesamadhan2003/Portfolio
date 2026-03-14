import AboutPageContent from "../components/about/AboutPageContent";

function About() {
    return (
        <div className="relative">
            <AboutPageContent />
            <div className="fixed bottom-6 left-6 z-20 rounded-lg border border-[#7E3AF2]/40 bg-[#12052b]/90 px-4 py-2 text-sm text-[#EAEAEA] shadow-[0_0_18px_rgba(126,58,242,0.25)]">
                📞 +91 9405652637
            </div>
        </div>
    );
}

export default About;
