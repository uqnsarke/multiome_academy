
'use client';
import {useState} from 'react';
import ServiceCard from './ServiceCard';
import {Dna,BarChart3,Layers,BrainCircuit,UserCheck,Video} from 'lucide-react';

export default function ServicesSection(){
const [flip,setFlip]=useState(null);
const services=[
{icon:<Dna className='h-10 w-10 text-cyan-300'/>,title:'Single-Cell RNA-seq',desc:'QC, clustering, markers, trajectory, enrichment.',price:'$499'},
{icon:<BarChart3 className='h-10 w-10 text-purple-300'/>,title:'scATAC & Chromatin',desc:'Peaks, motifs, chromVAR, enhancers.',price:'$599'},
{icon:<Layers className='h-10 w-10 text-pink-300'/>,title:'Multiome Integration',desc:'WNN + ArchR + CCAN mapping.',price:'$799'},
{icon:<BrainCircuit className='h-10 w-10 text-yellow-300'/>,title:'Machine Learning',desc:'Aging clocks, embeddings, prediction.',price:'Coming Soon'},
{icon:<UserCheck className='h-10 w-10 text-green-300'/>,title:'Consulting',desc:'Study design, pipelines, manuscript.',price:'$99/hr'},
{icon:<Video className='h-10 w-10 text-orange-300'/>,title:'Courses',desc:'Real dataset tutorials.',price:'Coming Soon'},
];

return(
<section className='py-24 text-white'>
  <h2 className='text-4xl text-center mb-12'>Services</h2>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6'>
    {services.map((s,i)=>(
      <div key={i} onClick={()=>setFlip(flip===i?null:i)}>
        <ServiceCard
          flipped={flip===i}
          front={<><div>{s.icon}</div><h3 className='text-xl'>{s.title}</h3></>}
          back={<><p className='text-gray-200 mb-3'>{s.desc}</p><p className='text-cyan-300 font-semibold mb-4'>{s.price}</p></>}
        />
      </div>
    ))}
  </div>
</section>
);
}
