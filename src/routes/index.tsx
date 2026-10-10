import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight, ArrowDown, ArrowRight, ArrowLeft, BedDouble, Snowflake, MapPin, Leaf, Menu, X, MessageCircle, Plane, Car, Compass, Binoculars, Plus, Expand, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import lodgeImage from "@/assets/jungle-lodge.jpg";
import roomImage from "@/assets/guest-room.jpg";
import elephantImage from "@/assets/safari-elephants.jpg";
import sigiriyaImage from "@/assets/sigiriya.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Nicoya Safari Resort — Habarana Escape | Independent Concept" },
    { name: "description", content: "Explore an independent editorial website concept for Nicoya Safari Resort in Habarana, near Minneriya National Park. Illustrative imagery and demo enquiries only; not the official resort website." },
    { property: "og:title", content: "Nicoya Safari Resort — A Habarana Escape | Design Concept" },
    { property: "og:description", content: "A boutique jungle-stay portfolio concept by Source Code Software Solutions. Not the official resort website." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const whatsapp = "https://wa.me/94778094806";
const navItems = [{ label: "The Stay", id: "stay" }, { label: "Rooms", id: "rooms" }, { label: "Experiences", id: "experiences" }, { label: "Gallery", id: "gallery" }, { label: "Location", id: "location" }];
const gallery = [
  { src: lodgeImage, title: "A little closer to nature", alt: "Imagined tropical jungle lodge surrounded by green foliage" },
  { src: roomImage, title: "Room to unwind", alt: "Illustrative double bedroom with tropical greenery outside" },
  { src: elephantImage, title: "Into the wild", alt: "Generated illustration of Sri Lankan elephants beside a lake" },
];
const faqs = [
  ["Where is Nicoya Safari Resort?", "The public listing places the resort in Habarana, Sri Lanka, near Minneriya National Park. The exact address, map pin and travel times need to be verified with the property before launch."],
  ["What rooms are available?", "The listing describes four double air-conditioned rooms. Room photographs, bed arrangements, occupancy, rates and current availability must be confirmed directly with the property."],
  ["Can a safari be arranged?", "Safari arrangements are mentioned in the public listing and may be available on request. Please confirm the park, operator, timing, availability and costs directly. Wildlife sightings are never guaranteed."],
  ["Is airport pickup available?", "The listing mentions that airport pickup, transport and Sri Lanka tours may be arranged. These are request-based services, not confirmed inclusions; all details and charges require verification."],
  ["Can I make a booking through this website?", "No. This is an independent design concept, not the official resort website. The form is a demonstration only and does not send or store your details. The listed contact number should be verified before contacting the property."],
];

function Wordmark() { return <a href="#top" className="wordmark" aria-label="Nicoya Safari Resort, back to top"><Leaf aria-hidden="true" /><span><span className="brand-name">nicoya</span><span className="brand-sub">Safari Resort</span></span></a>; }
function ConceptBadge() { return <span className="concept-badge"><span className="concept-dot" /> Independent concept</span>; }
function WhatsAppLink({ hero = false }: { hero?: boolean }) { return <Button variant={hero ? "brass" : "default"} asChild className={hero ? "" : "contact-cta"}><a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Enquire on WhatsApp, public listing number — verify before launch"><MessageCircle />Enquire on WhatsApp<ArrowUpRight /></a></Button>; }

function Index() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
 const [submitted, setSubmitted] = useState(false);
 const selectedImage = galleryIndex === null ? undefined : gallery[galleryIndex];
 function submitEnquiry(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
 return <>
  <a href="#main" className="skip-link">Skip to content</a>
  <section className="hero" id="top" aria-label="Nicoya Safari Resort concept">
   <img className="hero-image" src={lodgeImage} alt="Illustrative concept of a Sri Lankan tropical jungle lodge, not the actual resort" width={1920} height={1088} fetchPriority="high" />
   <header className="header site-width">
    <Wordmark />
    <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}<ConceptBadge /><Button asChild variant="glass" className="nav-enquire"><a href="#contact">Plan your stay <ArrowUpRight /></a></Button></nav>
    <Button variant="navigation" size="icon" className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-navigation">{menuOpen ? <X /> : <Menu />}</Button>
    {menuOpen && <nav className="mobile-menu" id="mobile-navigation" aria-label="Mobile navigation">{[...navItems, {label:"Plan your stay", id:"contact"}].map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>{item.label}</a>)}<ConceptBadge /></nav>}
   </header>
   <div className="hero-content site-width">
    <p className="eyebrow">Habarana, Sri Lanka · A stay close to nature</p>
    <h1>Your Habarana<br />Escape, <em>Close<br />to the Wild</em></h1>
    <p className="hero-sub">Slow mornings. Wild encounters. A quieter corner of Sri Lanka to call your own.</p>
    <div className="hero-actions"><WhatsAppLink hero /><Button variant="glass" asChild><a href="#stay">Explore the Stay <ArrowDown /></a></Button></div>
    <p className="image-disclaimer">Public listing contact · verify before launch</p>
   </div>
   <div className="hero-bottom site-width"><div><span className="hero-location"><MapPin size={13} /> Habarana · Sri Lanka</span><p className="image-disclaimer">Independent design concept · imagery is illustrative</p></div><a className="scroll-link" href="#stay">Discover Nicoya <ArrowDown size={16} /></a></div>
  </section>
  <main id="main">
   <section className="section site-width" id="stay">
    <div className="intro"><div><p className="eyebrow">A different kind of escape</p><h2 className="section-title">A small stay.<br />A world of <em>possibility.</em></h2></div><div className="intro-copy"><p className="body-copy">Some journeys are better taken slowly. In Habarana, the gateway to Sri Lanka’s wild landscapes, Nicoya Safari Resort offers a starting point for a more unhurried escape.</p><p className="body-copy">With just four double air-conditioned rooms described in its public listing, it’s a small-scale stay with the possibility of big adventures — from safari outings to journeys further across the island.</p><p className="signature">Stay a little. Discover a lot.</p></div></div>
    <div className="fact-strip"><div className="fact"><BedDouble /><div><strong>Four double rooms</strong><span>A small-scale stay</span></div></div><div className="fact"><Snowflake /><div><strong>Air-conditioned</strong><span>As described in the listing</span></div></div><div className="fact"><Binoculars /><div><strong>Safari arrangements</strong><span>May be arranged on request</span></div></div><div className="fact"><MapPin /><div><strong>Habarana, Sri Lanka</strong><span>Near Minneriya National Park</span></div></div>
   </section>
   <section className="section stay-section" id="rooms"><div className="site-width">
    <div className="section-heading"><div><p className="eyebrow">Rest between adventures</p><h2 className="section-title">Your own quiet <em>corner.</em></h2></div><p className="body-copy">An intimate stay, away from the rush.<br />A place to pause before the next discovery.</p></div>
    <div className="room-layout"><div className="photo-wrap room-photo"><img src={roomImage} alt="Illustrative imagined bedroom — not an actual Nicoya room" loading="lazy" width={1536} height={1024} /><span className="photo-caption">Illustrative room concept · not a resort photograph</span></div><div className="room-copy"><p className="room-number">The stay / 01</p><h3>Double Room</h3><p className="body-copy">A simple base for days spent exploring Habarana. The public listing describes four double rooms with air conditioning; the finer details are yours to confirm with the property.</p><div className="room-features"><span><BedDouble /> Double room</span><span><Snowflake /> Air conditioning</span><span><Leaf /> 4 rooms listed</span></div><Button asChild variant="editorial" className="text-link"><a href="#contact">Enquire about your stay <ArrowUpRight /></a></Button><p className="fine-note">Room styling is illustrative. Rates, availability and room facilities require verification.</p></div></div>
    <div className="amenities" aria-label="Listed amenities and possible services">{[{icon:Snowflake,title:"A cooler retreat",text:"Air-conditioned double rooms, as described in the public listing."},{icon:Plane,title:"Airport pickup",text:"May be arranged on request. Confirm availability and charges."},{icon:Car,title:"Travel made easier",text:"Transport arrangements may be available for your onward journey."},{icon:Compass,title:"Beyond Habarana",text:"Sri Lanka tours may be arranged. Ask about routes and options."}].map(item => <div className="amenity" key={item.title}><item.icon /><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
   </div></section>
   <section className="section safari-section" id="experiences"><div className="site-width safari-grid"><div><p className="eyebrow">The wild is closer than you think</p><h2 className="section-title">Less ordinary.<br />More <em>extraordinary.</em></h2><p className="body-copy">Habarana puts Sri Lanka’s natural beauty within reach. Think open landscapes, forest trails and the possibility of seeing elephants in their natural habitat near Minneriya.</p><div className="experience-list"><div className="experience-row"><div><span>01</span><h3>Minneriya safari</h3></div><Binoculars /></div><div className="experience-row"><div><span>02</span><h3>Explore Sri Lanka</h3></div><Compass /></div><div className="experience-row"><div><span>03</span><h3>Your own onward journey</h3></div><Car /></div></div><Button variant="glass" asChild><a href="#contact">Ask about an experience <ArrowUpRight /></a></Button><p className="fine-note">Arrangements subject to confirmation. Wildlife sightings are not guaranteed.</p></div><div className="photo-wrap safari-photo"><img src={elephantImage} alt="Illustrative Sri Lankan elephant safari scene, not a photograph from a resort tour" loading="lazy" width={1536} height={1024} /><span className="photo-caption">Illustrative safari imagery</span></div></div></section>
   <section className="section site-width" id="gallery"><div className="section-heading"><div><p className="eyebrow">A glimpse of the feeling</p><h2 className="section-title">Picture your <em>escape.</em></h2></div><p className="body-copy">A visual mood for the journey ahead.<br />All imagery is generated for this independent concept, not actual resort photography.</p></div><div className="gallery-grid">{gallery.map((image,index) => <Button key={image.title} variant="navigation" className="gallery-item" onClick={() => setGalleryIndex(index)} aria-label={`View illustrative image: ${image.title}`}><img src={image.src} alt={image.alt} loading="lazy" width={1536} height={1024} /><span className="gallery-label">{image.title}</span><Expand className="gallery-zoom" /></Button>)}</div></section>
   <section className="location-section site-width" id="location"><div className="location-grid"><div className="photo-wrap location-photo"><img src={sigiriyaImage} alt="Illustrative landscape of Sigiriya rock in Sri Lanka, not a view from the resort" loading="lazy" width={1536} height={1024} /><span className="photo-caption">Illustrative regional landscape · Sigiriya</span></div><div><p className="eyebrow">Find your way to Habarana</p><h2 className="section-title">At the heart of<br /><em>discovery.</em></h2><p className="body-copy">Make Habarana your starting point for the island’s natural and cultural landscapes. Nicoya Safari Resort is listed in Habarana, near Minneriya National Park.</p><div className="location-address"><MapPin /><div>Habarana, Sri Lanka<br /><span className="fine-note">Exact resort address and map pin: verify before launch.</span></div></div><Button variant="editorial" asChild className="text-link mt-5"><a href="https://www.google.com/maps/search/?api=1&query=Habarana%2C%20Sri%20Lanka" target="_blank" rel="noopener noreferrer">Explore Habarana on the map <ArrowUpRight /></a></Button><p className="fine-note">Map opens the town, not a verified resort location.</p></div></div></section>
   <section className="section faq-section"><div className="site-width faq-layout"><div><p className="eyebrow">A few things to know</p><h2 className="section-title">Before you<br /><em>make your escape.</em></h2></div><div className="faq-list">{faqs.map(([question,answer]) => <details key={question}><summary>{question}<Plus aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div></section>
   <section className="section contact-section" id="contact"><div className="site-width contact-grid"><div className="contact-copy"><p className="eyebrow">The next chapter starts here</p><h2 className="section-title">Let’s dream up<br />your <em>getaway.</em></h2><p className="body-copy">A quiet stay, a wild adventure, or a little of both. Explore an enquiry below, or use the public listing contact once verified.</p><span className="contact-phone">+94 77 809 4806</span><p className="fine-note">Public listing contact · verify before launch</p><WhatsAppLink /><p className="fine-note">WhatsApp opens an external chat. This concept is not operated by the resort.</p></div>
    <form className="enquiry-form" onSubmit={submitEnquiry} onChange={() => submitted && setSubmitted(false)}>
     <div className="form-field"><label htmlFor="name">Your name *</label><input id="name" name="name" autoComplete="name" placeholder="Full name" required maxLength={120} /></div>
     <div className="form-field"><label htmlFor="contact-detail">Email or phone *</label><input id="contact-detail" name="contact" autoComplete="email" placeholder="How can we reach you?" required maxLength={150} /></div>
     <div className="form-field"><label htmlFor="date">Preferred date</label><input id="date" name="date" type="date" /></div>
     <div className="form-field"><label htmlFor="guests">Number of guests</label><select id="guests" name="guests" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5+">5+ guests</option></select></div>
     <div className="form-field field-wide"><label htmlFor="message">A little about your plans</label><textarea id="message" name="message" placeholder="Your stay, a safari, something special…" maxLength={2000} /></div>
     <div className="form-bottom field-wide"><p>Demo enquiry only. Your details are not sent or stored.</p><Button type="submit">Preview enquiry <ArrowUpRight /></Button></div>
     {submitted && <div className="demo-success" role="status"><CheckCircle2 className="inline mr-2" size={16} /><strong>Demo enquiry complete.</strong><br />Nothing was sent or stored. This is an independent website concept, not a booking or an enquiry to the resort.</div>}
    </form>
   </div></section>
  </main>
  <footer className="footer"><div className="site-width"><div className="footer-top"><div><Wordmark /><p className="footer-tagline">A little closer to the wild.</p></div><nav className="footer-links" aria-label="Footer navigation"><a href="#stay">The Stay</a><a href="#experiences">Experiences</a><a href="#gallery">Gallery</a><a href="#contact">Get in touch</a></nav></div><div className="footer-bottom"><p>Independent concept design by Source Code Software Solutions — not the official resort website.</p><p>Portfolio concept · Illustrative imagery · Contact details: verify before launch</p></div></div></footer>
  <Dialog open={galleryIndex !== null} onOpenChange={open => { if (!open) setGalleryIndex(null); }}><DialogContent className="gallery-dialog"><DialogTitle>{selectedImage?.title ?? "Concept gallery"}</DialogTitle><DialogDescription>Generated illustrative concept imagery — not actual resort photography.</DialogDescription>{selectedImage && <img src={selectedImage.src} alt={selectedImage.alt} width={1536} height={1024} />}<div className="gallery-controls"><Button variant="ghost" size="icon" aria-label="Previous image" onClick={() => setGalleryIndex(index => index === null ? 0 : (index + gallery.length - 1) % gallery.length)}><ArrowLeft /></Button><span>{galleryIndex === null ? 1 : galleryIndex + 1} / {gallery.length}</span><Button variant="ghost" size="icon" aria-label="Next image" onClick={() => setGalleryIndex(index => index === null ? 0 : (index + 1) % gallery.length)}><ArrowRight /></Button></div></DialogContent></Dialog>
 </>;
}
