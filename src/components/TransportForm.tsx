'use client';

import { useState } from 'react';
import { Upload } from 'lucide-react';

export default function TransportForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Registro de Transporte
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="empresa" className="block text-sm font-medium text-gray-300">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="ruc" className="block text-sm font-medium text-gray-300">
                  RUC
                </label>
                <input
                  type="text"
                  id="ruc"
                  className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="fecha" className="block text-sm font-medium text-gray-300">
                  Fecha
                </label>
                <input
                  type="date"
                  id="fecha"
                  className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="kilometros" className="block text-sm font-medium text-gray-300">
                  Kilómetros
                </label>
                <input
                  type="number"
                  id="kilometros"
                  className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="socio" className="block text-sm font-medium text-gray-300">
                  Socio
                </label>
                <input
                  type="text"
                  id="socio"
                  className="w-full px-4 py-2 rounded-md border border-gray-600 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Documentos
                </label>
                <div className="relative">
                  <input
                    type="file"
                    className="hidden"
                    id="file-upload"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                  <label
                    htmlFor="file-upload"
                    className="flex items-center justify-center w-full px-4 py-2 border border-gray-600 bg-gray-700 text-white rounded-md cursor-pointer hover:bg-gray-600 transition-colors"
                  >
                    <Upload className="w-5 h-5 mr-2" />
                    {file ? file.name : 'Subir archivo'}
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}