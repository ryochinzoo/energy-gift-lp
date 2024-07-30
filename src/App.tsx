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
import NPOList from "./components/npoList";
import NewValues from './components/newValues';
import Hero from './components/hero';
import Form from './components/form';
import { useRef } from 'react';
import ToTop from './components/toTop';

export default function App() {
    return (
        <>
            <ToTop />
            <Header />
            <Hero />
            <NewValues />
            <Service />
            <NPOList />
            <CTAArea />
            <Diff />
            <Comparison />
            <FAQArea />
            <InstallFlow />
            <Vision />
            <Form />
            <Footer />
        </>
    )
}
