'use client'

import { SectionTitle } from '../components/section-title'
import { Button } from '../components/button'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import React from 'react'


export const ContactForm = () => {
  
 

  return (
    <section 
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-gray-950"
      id="contact"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          section="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />
        <motion.form
          className="mt-12 w-full flex flex-col gap-4">
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600" />
          <input
            placeholder="E-mail"
            type="email"
            className="w-full h-14 bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600"/>
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-800 rounded-lg placeholder:text-gray-400 text-gray-50 p-4 focus:outline-none focus:ring-2 ring-emerald-600" maxLength={500}
          />

          <div className="relative w-max mx-auto mt-6">
            <Button className="z-[2] relative">
              Enviar mensagem
              <HiArrowNarrowRight size={18} />
            </Button>
            <div className="absolute inset-0 bg-emerald-600 blur-2xl opacity-20" />
          </div>
        </motion.form>
      </div>
    </section>
  )
}