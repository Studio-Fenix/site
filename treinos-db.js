/* BANCO DE DADOS DE EXERCÍCIOS - STUDIO FÊNIX */
/* Imagens atualizadas em Alta Resolução (Pexels) com padrão visual premium */

const exerciseDB = [
    // ==========================================
    // PEITO
    // ==========================================
    { 
        id: 'p1', musculo: 'peito', nome: 'Supino Reto', eq: 'Banco Supino Reto + Anilhas', 
        img: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Deite-se no banco reto. Desça a barra na linha do peito e empurre controlando o movimento.' 
    },
    { 
        id: 'p2', musculo: 'peito', nome: 'Supino Inclinado', eq: 'Banco Supino Inclinado + Anilhas', 
        img: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'No banco inclinado, desça a barra até a parte superior do peitoral.' 
    },
    { 
        id: 'p3', musculo: 'peito', nome: 'Crossover Polia Alta', eq: 'Crossover c/ Estribos', 
        img: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'No crossover, puxe os estribos de cima para baixo cruzando à frente do abdómen, focando na parte inferior do peito.' 
    },
    { 
        id: 'p4', musculo: 'peito', nome: 'Crossover Polia Média', eq: 'Crossover c/ Estribos', 
        img: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Polias na altura dos ombros. Feche os braços à frente do peito esmagando a musculatura.' 
    },
    { 
        id: 'p5', musculo: 'peito', nome: 'Crossover Polia Baixa', eq: 'Crossover c/ Estribos', 
        img: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Puxe os estribos de baixo para cima, focando na parte superior (clavicular) do peitoral.' 
    },
    { 
        id: 'p6', musculo: 'peito', nome: 'Crucifixo Reto', eq: 'Banqueta Regulável 0 a 90° + Halteres', 
        img: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Deitado na banqueta reta. Abra os braços com os halteres alongando o peitoral e feche no centro.' 
    },
    { 
        id: 'p7', musculo: 'peito', nome: 'Crucifixo Inclinado', eq: 'Banqueta Regulável 0 a 90° + Halteres', 
        img: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Banqueta inclinada. Foco no alongamento e contração da parte superior do peito.' 
    },
    { 
        id: 'p8', musculo: 'peito', nome: 'Pull-over', eq: 'Banqueta Regulável + Halter', 
        img: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Deitado na banqueta, desça um halter para trás da cabeça com braços semi-esticados e puxe de volta.' 
    },
    { 
        id: 'p9', musculo: 'peito', nome: 'Flexão de Braço', eq: 'Colchonete / Peso do Corpo', 
        img: 'https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Corpo reto apoiado nas mãos e pés (ou joelhos). Desça até o peito quase tocar o colchonete.' 
    },

    // ==========================================
    // COSTAS & TRAPÉZIO
    // ==========================================
    { 
        id: 'c1', musculo: 'costas', nome: 'Puxada Vertical Aberta', eq: 'Puxador Vertical Articulado', 
        img: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Pegada aberta. Puxe as hastes articuladas na direção da parte superior do peito fechando as escápulas.' 
    },
    { 
        id: 'c2', musculo: 'costas', nome: 'Puxada Vertical Fechada', eq: 'Puxador Vertical Articulado', 
        img: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Pegada fechada/neutra. Puxe focando mais no miolo das costas e alongamento do dorsal.' 
    },
    { 
        id: 'c3', musculo: 'costas', nome: 'Remada Cavalinho', eq: 'Remada Cavalinho + Anilhas', 
        img: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Pés firmes, joelhos semi-flexionados. Puxe o peso em direção ao abdómen mantendo a coluna selada.' 
    },
    { 
        id: 'c4', musculo: 'costas', nome: 'Remada Unilateral (Serrote)', eq: 'Banqueta Regulável + Halter', 
        img: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Apoie um joelho e mão na banqueta. Puxe o halter na direção do quadril.' 
    },
    { 
        id: 'c5', musculo: 'costas', nome: 'Remada Curvada', eq: 'Halteres', 
        img: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Tronco inclinado para a frente, coluna reta. Puxe os halteres simultaneamente contraindo as costas.' 
    },
    { 
        id: 'c6', musculo: 'costas', nome: 'Remada Baixa na Polia', eq: 'Crossover c/ Estribos', 
        img: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Sentado no chão ou step, use a polia baixa do crossover para puxar os estribos até ao umbigo.' 
    },
    { 
        id: 'c7', musculo: 'costas', nome: 'Pull-down (Extensão de Ombros)', eq: 'Crossover c/ Estribos', 
        img: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Em pé frente à polia alta. Com braços esticados, puxe o estribo até à coxa focando no dorsal.' 
    },
    { 
        id: 'tr1', musculo: 'trapezio', nome: 'Encolhimento de Ombros', eq: 'Halteres ou Anilhas', 
        img: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Segure os pesos ao lado do corpo. Eleve os ombros em direção às orelhas e desça devagar.' 
    },

    // ==========================================
    // PERNAS & GLÚTEOS
    // ==========================================
    { 
        id: 'pe1', musculo: 'perna', nome: 'Agachamento Hack', eq: 'Rack 45° Agachamento', 
        img: 'https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Apoie costas e ombros no Rack. Desça até formar 90 graus com os joelhos.' 
    },
    { 
        id: 'pe2', musculo: 'perna', nome: 'Agachamento Squat Articulado', eq: 'Agachamento Squat', 
        img: 'https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Posicione os ombros no aparelho. Agachamento com segurança e foco extremo no quadríceps e glúteos.' 
    },
    { 
        id: 'pe3', musculo: 'perna', nome: 'Leg Press 45°', eq: 'Leg Press 45° + Anilhas', 
        img: 'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Apoie totalmente as costas. Empurre a plataforma, não estique os joelhos 100% no topo.' 
    },
    { 
        id: 'pe4', musculo: 'perna', nome: 'Leg Press 80° (Vertical)', eq: 'Leg Press 80° + Anilhas', 
        img: 'https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Deitado de costas para o chão, empurre o peso verticalmente. Foco intenso em posteriores e glúteos.' 
    },
    { 
        id: 'pe5', musculo: 'perna', nome: 'Agachamento Búlgaro', eq: 'Agachamento Bulgaro + Halteres', 
        img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Apoie o pé de trás no rolo/banco búlgaro. Agache concentrando todo o peso na perna da frente.' 
    },
    { 
        id: 'pe6', musculo: 'perna', nome: 'Agachamento Sumô', eq: 'Halter ou Anilha pesada', 
        img: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Pés bem afastados, pontas para fora. Segure o peso no centro e desça ativando os adutores.' 
    },
    { 
        id: 'pe7', musculo: 'perna', nome: 'Cadeira Extensora', eq: 'Extensor Unilateral Articulado', 
        img: 'https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Estenda as pernas focando no quadríceps. Segure 1 segundo no topo para máxima contração.' 
    },
    { 
        id: 'pe8', musculo: 'perna', nome: 'Extensora Unilateral', eq: 'Extensor Unilateral Articulado', 
        img: 'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Faça o movimento com uma perna de cada vez para corrigir assimetrias.' 
    },
    { 
        id: 'pe9', musculo: 'perna', nome: 'Mesa Flexora', eq: 'Mesa Flexora', 
        img: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Deitado de bruços, flexione as pernas. Mantenha o quadril colado no banco o tempo todo.' 
    },
    { 
        id: 'pe10', musculo: 'perna', nome: 'Stiff', eq: 'Halteres ou Anilha 20kg', 
        img: 'https://images.pexels.com/photos/791763/pexels-photo-791763.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Pernas semi-esticadas. Desça o peso rente à perna jogando o quadril para trás para alongar o posterior.' 
    },
    { 
        id: 'pe11', musculo: 'perna', nome: 'Elevação Pélvica', eq: 'Colchonete + Anilha/Halter', 
        img: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Deitado, posicione o peso no quadril. Suba contraindo os glúteos com força.' 
    },
    { 
        id: 'pe12', musculo: 'perna', nome: 'Glúteo 4 Apoios', eq: 'Colchonete', 
        img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Apoie joelhos e cotovelos. Eleve a perna flexionada para o alto empurrando com o calcanhar.' 
    },
    { 
        id: 'pe13', musculo: 'perna', nome: 'Panturrilha no Leg Press 45°', eq: 'Leg Press 45°', 
        img: 'https://images.pexels.com/photos/416754/pexels-photo-416754.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Com joelhos semi-estendidos, posicione a ponta dos pés na borda e faça a flexão plantar.' 
    },
    { 
        id: 'pe14', musculo: 'perna', nome: 'Panturrilha Unilateral em Pé', eq: 'Espaldar (Apoio)', 
        img: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Apoie a mão no espaldar para equilíbrio. Fique num pé só e eleve o calcanhar ao máximo.' 
    },

    // ==========================================
    // OMBROS
    // ==========================================
    { 
        id: 'o1', musculo: 'ombro', nome: 'Desenvolvimento Halteres', eq: 'Banqueta 0 a 90° + Halteres', 
        img: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Banqueta a 90°. Empurre os halteres para cima da cabeça unindo-os no topo.' 
    },
    { 
        id: 'o2', musculo: 'ombro', nome: 'Elevação Lateral', eq: 'Halteres', 
        img: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Em pé, suba os halteres lateralmente até à linha dos ombros com cotovelos levemente flexionados.' 
    },
    { 
        id: 'o3', musculo: 'ombro', nome: 'Elevação Lateral Polia', eq: 'Crossover c/ Estribo', 
        img: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Polia baixa. Puxe o cabo lateralmente criando tensão contínua no ombro.' 
    },
    { 
        id: 'o4', musculo: 'ombro', nome: 'Elevação Frontal', eq: 'Halteres ou Anilha', 
        img: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Eleve o peso com os braços retos à frente do corpo até à altura do rosto.' 
    },
    { 
        id: 'o5', musculo: 'ombro', nome: 'Crucifixo Inverso', eq: 'Banqueta Inclinada + Halteres', 
        img: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Deite de bruços na banqueta inclinada. Abra os braços focando na parte posterior do ombro.' 
    },
    { 
        id: 'o6', musculo: 'ombro', nome: 'Face Pull', eq: 'Crossover polia alta', 
        img: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Puxe o estribo em direção ao seu rosto, abrindo os cotovelos para trás.' 
    },

    // ==========================================
    // BÍCEPS
    // ==========================================
    { 
        id: 'b1', musculo: 'biceps', nome: 'Rosca Direta Polia', eq: 'Crossover Polia Baixa', 
        img: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Puxe de baixo para cima mantendo o cotovelo travado ao lado do corpo.' 
    },
    { 
        id: 'b2', musculo: 'biceps', nome: 'Rosca Alternada', eq: 'Halteres', 
        img: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Em pé ou sentado. Suba um halter de cada vez girando o punho para fora na subida.' 
    },
    { 
        id: 'b3', musculo: 'biceps', nome: 'Rosca Martelo', eq: 'Halteres', 
        img: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Pegada neutra (palmas viradas uma para a outra). Foca no antebraço e músculo braquial.' 
    },
    { 
        id: 'b4', musculo: 'biceps', nome: 'Rosca Concentrada', eq: 'Banqueta + Halter', 
        img: 'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Sentado, apoie o cotovelo na parte interna da coxa. Faça o movimento isolando 100% o bíceps.' 
    },

    // ==========================================
    // TRÍCEPS
    // ==========================================
    { 
        id: 't1', musculo: 'triceps', nome: 'Tríceps Polia Pronado', eq: 'Crossover Polia Alta', 
        img: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Palmas para baixo. Empurre o peso estendendo totalmente o braço.' 
    },
    { 
        id: 't2', musculo: 'triceps', nome: 'Tríceps Polia Supinado', eq: 'Crossover Polia Alta', 
        img: 'https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Palmas para cima (invertida). Isola perfeitamente a cabeça longa do tríceps.' 
    },
    { 
        id: 't3', musculo: 'triceps', nome: 'Tríceps Testa', eq: 'Banqueta Regulável + Halteres', 
        img: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Deitado. Segure os halteres, flexione os cotovelos até à testa e empurre para cima.' 
    },
    { 
        id: 't4', musculo: 'triceps', nome: 'Tríceps Francês Unilateral', eq: 'Halter ou Crossover Baixo', 
        img: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Braço elevado atrás da cabeça. Estenda o braço para cima apontando para o teto.' 
    },
    { 
        id: 't5', musculo: 'triceps', nome: 'Tríceps Coice', eq: 'Halter ou Polia Baixa', 
        img: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Tronco inclinado. Cotovelo alto e fixo, estenda o antebraço para trás.' 
    },
    { 
        id: 't6', musculo: 'triceps', nome: 'Mergulho (Dips)', eq: 'Banqueta Reta', 
        img: 'https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Apoie as mãos no banco, pernas à frente. Desça o corpo fletindo os cotovelos a 90 graus.' 
    },

    // ==========================================
    // ABDÓMEN / CORE
    // ==========================================
    { 
        id: 'a1', musculo: 'cardio', nome: 'Abdominal Supra Curto', eq: 'Colchonete', 
        img: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Deitado, joelhos dobrados. Tire as escápulas do chão contraindo o abdómen e soltando o ar.' 
    },
    { 
        id: 'a2', musculo: 'cardio', nome: 'Abdominal Infra', eq: 'Colchonete', 
        img: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Deitado, mãos debaixo do glúteo. Eleve as pernas esticadas sem deixar a lombar arquear.' 
    },
    { 
        id: 'a3', musculo: 'cardio', nome: 'Abdominal na Polia', eq: 'Crossover', 
        img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'De joelhos, de costas ou frente para a polia alta. Flexione a coluna para baixo puxando o peso.' 
    },
    { 
        id: 'a4', musculo: 'cardio', nome: 'Prancha Isométrica', eq: 'Colchonete', 
        img: 'https://images.pexels.com/photos/176782/pexels-photo-176782.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Apoie antebraços e pontas dos pés. Mantenha o corpo reto e o abdómen extremamente contraído.' 
    },
    { 
        id: 'a5', musculo: 'cardio', nome: 'Elevação de Pernas', eq: 'Espaldar', 
        img: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'De costas para o espaldar, segure na barra alta e eleve os joelhos ou pernas retas até ao peito.' 
    },

    // ==========================================
    // CARDIO & MOBILIDADE
    // ==========================================
    { 
        id: 'ca1', musculo: 'cardio', nome: 'Caminhada Inclinada', eq: 'Esteira Ergométrica', 
        img: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Incline a esteira. Excelente para queimar gordura poupando os joelhos de impacto.' 
    },
    { 
        id: 'ca2', musculo: 'cardio', nome: 'Corrida (HIIT)', eq: 'Esteira Ergométrica', 
        img: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Alterne 1 minuto de corrida intensa com 1 minuto de caminhada.' 
    },
    { 
        id: 'ca3', musculo: 'cardio', nome: 'Polichinelos', eq: 'Livre / Colchonete', 
        img: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Exercício corporal para elevar a frequência cardíaca rapidamente.' 
    },
    { 
        id: 'ca4', musculo: 'cardio', nome: 'Burpees', eq: 'Livre', 
        img: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Agache, jogue os pés para trás, faça uma flexão e salte explosivamente.' 
    },
    { 
        id: 'ca5', musculo: 'cardio', nome: 'Alongamento de Costas e Peito', eq: 'Espaldar', 
        img: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800', 
        desc: 'Segure nas barras do espaldar para alongar a cadeia posterior e alongar o peitoral abrindo os braços.' 
    }
];