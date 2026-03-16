/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Hammer, Wrench, Droplet, Zap, Ruler, Home, ArrowRight, Facebook, MessageCircle, Phone } from 'lucide-react';

export default function App() {
  const phoneNumber = "094 233 334";
  const whatsappLink = "https://wa.me/59894233334"; // Formatted for Uruguay
  const facebookLink = "https://facebook.com/u.construcciones";

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-brand-orange selection:text-white font-sans relative">
      
      {/* Floating WhatsApp Button (Bottom Right) */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all flex items-center justify-center group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-white text-gray-900 text-sm font-medium px-3 py-1.5 rounded-sm shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          ¡Escríbenos!
        </span>
      </a>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="https://i.ibb.co/dwLfRprw/u.png" alt="U Construcciones" className="h-10 w-auto" referrerPolicy="no-referrer" />
          </a>
          <div className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase text-gray-500 font-medium">
            <a href="#servicios" className="hover:text-brand-orange transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-brand-orange transition-colors">Proyectos</a>
            <a href="#nosotros" className="hover:text-brand-orange transition-colors">Nosotros</a>
            <a href="#contacto" className="text-brand-orange hover:text-brand-orange/80 transition-colors">Contacto</a>
            <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-6 mb-8">
              <img src="https://i.ibb.co/dwLfRprw/u.png" alt="Logo U Construcciones" className="h-20 w-auto" referrerPolicy="no-referrer" />
              <div className="h-12 w-px bg-gray-200"></div>
              <span className="text-sm uppercase tracking-widest text-gray-500 font-medium">Empresa Constructora</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter leading-[1.1] mb-8 text-gray-900">
              Construimos <br />
              con <span className="text-brand-orange font-normal">seriedad</span> <br />
              y confianza.
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-12">
              Más de 20 años de experiencia en construcciones, reciclaje, baños, cocinas, sanitarias, electricidad y proyectos integrales.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a href="#contacto" className="inline-flex items-center gap-4 text-sm uppercase tracking-widest bg-brand-orange text-white px-8 py-4 rounded-sm hover:bg-brand-orange/90 transition-colors group font-medium">
                Cotizar Proyecto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="inline-flex items-center gap-3 text-gray-600 hover:text-brand-orange transition-colors font-medium">
                <Phone className="w-5 h-5" />
                {phoneNumber}
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] rounded-sm overflow-hidden bg-gray-100"
          >
            <img 
              src="https://images.homify.com/v1441047330/p/photo/image/684577/CH_11.jpg" 
              alt="Obra en construcción" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border border-black/5 rounded-sm pointer-events-none"></div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 md:py-32 px-6 bg-gray-50 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 text-gray-900">Nuestros Servicios</h2>
            <div className="w-12 h-px bg-brand-orange mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              { icon: Home, title: "Construcciones", desc: "Obras nuevas y ampliaciones con los mejores estándares de calidad y materiales." },
              { icon: Wrench, title: "Reciclaje", desc: "Renovación y restauración de espacios antiguos para darles nueva vida y funcionalidad." },
              { icon: Droplet, title: "Sanitarias y Baños", desc: "Instalaciones completas, termofusión y remodelación total de baños." },
              { icon: Hammer, title: "Cocinas", desc: "Diseño y ejecución de cocinas modernas, funcionales y a medida." },
              { icon: Zap, title: "Electricidad", desc: "Instalaciones eléctricas seguras, recableado, automatización y tableros." },
              { icon: Ruler, title: "Proyectos", desc: "Planificación, dirección de obra y ejecución integral de principio a fin." }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group bg-white p-8 rounded-sm shadow-sm border border-black/5 hover:shadow-md hover:border-brand-orange/30 transition-all"
              >
                <service.icon className="w-10 h-10 text-brand-orange mb-6" strokeWidth={1.5} />
                <h3 className="text-xl font-medium mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Anteriores */}
      <section id="proyectos" className="py-24 md:py-32 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 text-gray-900">Proyectos Anteriores</h2>
              <div className="w-12 h-px bg-brand-orange"></div>
            </div>
            <p className="text-gray-600 font-light max-w-md">
              Un vistazo a algunas de nuestras obras recientes. Calidad y detalle en cada terminación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: "https://www.shutterstock.com/image-photo/under-construction-house-villas-concreate-600nw-2524483457.jpg", title: "Obra Nueva Residencial" },
              { img: "https://st.depositphotos.com/1007971/1501/i/450/depositphotos_15019339-stock-photo-construction-of-new-home-in.jpg", title: "Estructuras y Albañilería" },
              { img: "https://media.istockphoto.com/id/1466145748/es/foto/instaladores-de-cocina-instalando-algunos-gabinetes.jpg?s=612x612&w=0&k=20&c=6h0Kd17q8tAsL6CNvN7MLVybgUJ8xEAIb67vA98OVd4=", title: "Reciclaje de Cocina" },
              { img: "https://img.freepik.com/foto-gratis/mujer-afroamericana-casco-seguridad-tomando-foto-edificio-construccion_23-2148039969.jpg", title: "Dirección de Obra" },
              { img: "https://media.istockphoto.com/id/1477568723/es/foto/caos-de-remodelaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=FyrxEV0HR8Ks2IxYah8HmN7vvpKMdlR4yFW7R3B_8dI=", title: "Reforma Interior" },
              { img: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/b4a3/live/2163ac90-d72b-11ee-b83b-0f87a864f372.jpg.webp", title: "Proyectos Integrales" }
            ].map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-100"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white font-medium text-lg tracking-wide">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="nosotros" className="py-24 md:py-32 px-6 bg-gray-50 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden relative"
            >
              <img 
                src="https://picsum.photos/seed/construction-workers/800/1000" 
                alt="Equipo trabajando en obra" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 bg-white p-6 rounded-sm shadow-lg">
                <div className="text-4xl font-light text-brand-orange mb-1">20+</div>
                <div className="text-sm font-medium text-gray-900 uppercase tracking-widest">Años de<br/>Experiencia</div>
              </div>
            </motion.div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 text-gray-900">Nuestra Trayectoria</h2>
              <div className="w-12 h-px bg-brand-orange mb-10"></div>
              
              <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                <p>
                  U Construcciones nace con la premisa de ofrecer soluciones integrales y de alta calidad. Entendemos que cada proyecto es una inversión importante para nuestros clientes.
                </p>
                <p>
                  Nos destacamos por nuestra <strong className="text-gray-900 font-medium">seriedad y confianza</strong>. Cumplimos con los plazos establecidos y garantizamos resultados que superan las expectativas, ya sea en una pequeña reforma o en una obra desde cero.
                </p>
                <p>
                  Contamos con un equipo de profesionales capacitados en todas las áreas: albañilería, sanitaria, electricidad y dirección de obra, asegurando que no tengas que preocuparte por nada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 md:py-32 px-6 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-4 text-gray-900">Hablemos de tu obra</h2>
              <div className="w-12 h-px bg-brand-orange mb-10"></div>
              <p className="text-gray-600 font-light text-lg mb-12">
                Estamos listos para escuchar sobre tu próximo proyecto. Contáctanos y te brindaremos asesoramiento personalizado y presupuesto sin cargo.
              </p>
              
              <div className="space-y-8 text-gray-600 font-light">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-brand-orange border border-black/5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Teléfono / WhatsApp</div>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium text-lg hover:text-brand-orange transition-colors">
                      {phoneNumber}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full text-brand-orange border border-black/5">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Redes Sociales</div>
                    <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-gray-900 font-medium text-lg hover:text-[#1877F2] transition-colors">
                      u.construcciones
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-8 bg-gray-50 p-8 md:p-12 rounded-sm border border-black/5" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-xl font-medium text-gray-900 mb-6">Envíanos un mensaje</h3>
              
              <div className="relative">
                <input 
                  type="text" 
                  id="name"
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-brand-orange transition-colors peer placeholder-transparent"
                  placeholder="Nombre"
                />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-orange">Nombre Completo</label>
              </div>
              
              <div className="relative">
                <input 
                  type="tel" 
                  id="phone"
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-brand-orange transition-colors peer placeholder-transparent"
                  placeholder="Teléfono"
                />
                <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-orange">Teléfono</label>
              </div>

              <div className="relative">
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-gray-900 focus:outline-none focus:border-brand-orange transition-colors peer placeholder-transparent resize-none"
                  placeholder="Mensaje"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-xs text-gray-500 uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-brand-orange">Cuéntanos sobre tu proyecto</label>
              </div>

              <button className="w-full bg-brand-orange text-white font-medium uppercase tracking-widest py-4 rounded-sm hover:bg-brand-orange/90 transition-colors shadow-sm">
                Enviar Consulta
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-black/10 bg-gray-50 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src="https://i.ibb.co/dwLfRprw/u.png" alt="U Construcciones" className="h-8 w-auto grayscale opacity-60" referrerPolicy="no-referrer" />
            <span className="text-gray-500 text-sm font-medium tracking-widest uppercase">Construcciones</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#1877F2] transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <p className="text-gray-500 text-xs uppercase tracking-widest">
              &copy; {new Date().getFullYear()} U Construcciones.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

