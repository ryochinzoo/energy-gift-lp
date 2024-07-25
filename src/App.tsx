import './App.scss';
import Service from './components/service';
import Header from './components/header';
import FAQArea from './components/faq';
import CTAArea from './components/ctaArea';
import InstallFlow from './components/installFlow';
import Vision from './components/vision';
import Comparison from './components/comparison';
import Diff from './components/difference';
import Footer from './components/footer';

export default function App() {
    return (
        <>
            <Header />
            <Service />
            <CTAArea />
            <Diff />
            <Comparison />
            <FAQArea />
            <InstallFlow />
            <Vision />
            <Footer />
        </>
    )
}
