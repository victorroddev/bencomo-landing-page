import { useEffect } from 'react';

export function PoliticaMeta() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
        
        {/* Header oficial */}
        <div className="bg-blue-600 p-8 text-center">
          <h1 className="text-3xl font-extrabold text-white uppercase tracking-tight">
            Centro de Privacidad y Legalidad
          </h1>
          <p className="mt-2 text-blue-100 italic">Bencomo Dental Clinic — Ciudad Juárez</p>
        </div>

        <div className="p-8 md:p-12 space-y-10">
          
          {/* SECCIÓN 1: POLÍTICA DE PRIVACIDAD */}
          <section>
            <div className="flex items-center mb-6 border-b-2 border-blue-500 pb-2">
              <h2 className="text-2xl font-bold text-gray-900">1. Política de Privacidad</h2>
            </div>
            <p className="text-sm text-gray-500 mb-4">Última actualización: 12 de marzo, 2026</p>
            
            <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
              <p><span className="font-semibold text-gray-900">Responsable:</span> Bencomo Dental Clinic (Ciudad Juárez, Chih.).</p>
              <p><span className="font-semibold text-gray-900">Datos Recabados:</span> Nombre, teléfono, email y tipo de servicio solicitado vía Messenger.</p>
              <p><span className="font-semibold text-gray-900">Finalidad:</span> Agendar citas y resolver dudas odontológicas.</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                <p className="text-xs md:text-sm text-blue-800 italic">
                  <strong>Transparencia IA:</strong> Los mensajes son procesados por un asistente inteligente para brindar atención inmediata 24/7.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* SECCIÓN 2: ELIMINACIÓN DE DATOS (NUEVA Y CLARA) */}
          <section className="bg-red-50 p-6 rounded-xl border border-red-100">
            <div className="flex items-center mb-4 border-b-2 border-red-500 pb-2">
              <h2 className="text-2xl font-bold text-gray-900">2. Eliminación de Datos (Data Deletion)</h2>
            </div>
            
            <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
              <p>
                En cumplimiento con las políticas de Meta, Bencomo Dental Clinic facilita a los usuarios el derecho a la eliminación total de su información personal.
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-200 shadow-sm">
                <p className="font-semibold text-red-700 mb-2">Procedimiento de solicitud:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Envíe un correo electrónico a: <span className="font-bold text-gray-900">hralvarez@bencomodentalclinic.com</span></li>
                  <li>Asunto: <span className="italic font-medium">"Solicitud de eliminación de datos de Messenger"</span>.</li>
                  <li>Incluya su nombre completo tal como aparece en su perfil de Facebook.</li>
                </ol>
              </div>
              <p className="font-medium text-gray-900 pt-2">
                <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Una vez recibida la solicitud, procederemos a borrar de forma definitiva todos los registros de sus mensajes y datos de contacto en un plazo no mayor a 72 horas.
              </p>
              <p className="italic text-gray-600 bg-gray-100 p-3 rounded text-xs md:text-sm">
                <strong>Confirmación:</strong> Tras completar la eliminación, se le enviará un correo electrónico de confirmación notificando que el proceso ha finalizado con éxito.
              </p>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* SECCIÓN 3: TÉRMINOS DE SERVICIO */}
          <section>
            <div className="flex items-center mb-6 border-b-2 border-blue-500 pb-2">
              <h2 className="text-2xl font-bold text-gray-900">3. Términos de Servicio</h2>
            </div>
            
            <ul className="list-disc pl-5 space-y-3 text-gray-700 text-sm md:text-base">
              <li><span className="font-semibold">Naturaleza:</span> Herramienta informativa; no es un diagnóstico médico oficial.</li>
              <li><span className="font-semibold">Uso Responsable:</span> El spam o lenguaje ofensivo causará el bloqueo del usuario.</li>
              <li><span className="font-semibold">Jurisdicción:</span> Leyes vigentes en el municipio de Juárez, Chihuahua, México.</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center border-t border-gray-200">
          <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest font-semibold">
            Bencomo Dental Clinic &copy; {new Date().getFullYear()} — Ciudad Juárez, Chih.
          </p>
        </div>
      </div>
    </div>
  );
}