import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Eye, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-8">
            Parce que la vie ne peut pas se résumer à :
          </h2>
          <p className="text-xl text-stone-600 mb-8 italic">
            Travailler, plaire, consommer, recommencer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
              Parce qu'un jour, on sent qu'on tourne en rond. On se retrouve bloqué dans des schémas qui se répètent. 
              On vit les mêmes déceptions, on retombe dans les mêmes peurs. C'est comme si on avait des œillères.
            </p>
            <p className="text-lg text-stone-700 mb-8 leading-relaxed">
              Pendant ce temps, d'autres semblent avancer plus facilement. Pourquoi ? Pas parce qu'ils sont « meilleurs », 
              mais parce qu'ils ont « compris le truc », un mécanisme qui nous échappe encore. Ils n'ont pas les mêmes lunettes. 
              Ils voient la vie différemment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <RefreshCw className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-2">Schémas répétitifs</h3>
                <p className="text-stone-600">Identifier et briser les boucles inconscientes qui nous limitent</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Eye className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-2">Nouveau regard</h3>
                <p className="text-stone-600">Changer de perspective pour voir les possibilités cachées</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Lightbulb className="text-amber-600" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-stone-800 mb-2">Compréhension profonde</h3>
                <p className="text-stone-600">Découvrir les mécanismes qui permettent d'avancer librement</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-stone-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-medium text-stone-800 mb-6 text-center">
            Ce que je te propose
          </h3>
          <div className="space-y-4 text-lg text-stone-700 leading-relaxed max-w-3xl mx-auto">
            <p>
              Je te propose de nous rencontrer et de jouer pour toi le rôle de miroir. 
              Pour t'aider à porter un nouveau regard sur toi et ta situation.
            </p>
            <p>
              Pour explorer ensemble tes souvenirs fondateurs, tes croyances limitantes, tes peurs cachées. 
              Pour t'aider à retirer, ne serait-ce qu'un instant, ces lunettes qui te bloquent.
            </p>
            <p>
              Pas pour te cajoler et te réconforter sur le fait que tu as raison et l'autre a tort. 
              Je te propose d'affronter ce que tu ne veux peut-être pas voir ou entendre (le célèbre déni).
            </p>
            <p className="text-lg text-stone-700 leading-relaxed">
              Peut-être que je possède déjà des clés de compréhension pour toi, ces petites vérités qu'on aurait aimé apprendre plus tôt. 
              Peut-être que celle dont tu as besoin, nous la forgerons ensemble.
            </p>
            <p className="font-medium text-amber-700 text-center">
              Dans tous les cas, on part de là où tu en es, pour clarifier ton chemin, te libérer de ce qui t'enchaîne 
              et te redonner ton pouvoir de créateur conscient.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;