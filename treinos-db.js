/* BANCO DE DADOS DE TREINOS - STUDIO FÊNIX 
   Imagens corrigidas e padronizadas.
*/

// --- LÓGICA DE SEMANA (A / B) ---
function getWeekNumber() {
    const date = new Date();
    const startDate = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
    return Math.ceil(days / 7);
}
const isWeekA = getWeekNumber() % 2 !== 0; // Ímpar = A, Par = B

// --- DADOS DOS EXERCÍCIOS ---
const exercicios = {
    segunda: {
        titulo: "Segunda: Peito e Tríceps",
        A: [
            { 
                nome: "Supino Reto com Barra", 
                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "10 a 12", descanso: "60s",
                desc: "1. Deite-se no banco com os pés firmes no chão.<br>2. Segure a barra um pouco além da largura dos ombros.<br>3. Desça a barra controladamente até tocar o meio do peito.<br>4. Empurre para cima soltando o ar, sem travar totalmente os cotovelos." 
            },
            { 
                nome: "Supino Inclinado com Halteres", 
                img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12", descanso: "60s",
                desc: "1. Ajuste o banco a 45 graus.<br>2. Inicie com os braços esticados.<br>3. Desça os halteres abrindo os cotovelos até a altura do peito.<br>4. Suba unindo os pesos no topo sem batê-los." 
            },
            { 
                nome: "Crossover (Polia Alta)", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "15", descanso: "45s",
                desc: "1. Tronco levemente inclinado à frente.<br>2. Mantenha os cotovelos levemente flexionados (posição de abraço).<br>3. Feche as mãos na frente do quadril, focando em esmagar o peitoral.<br>4. Controle a volta sem deixar os pesos encostarem." 
            },
            { 
                nome: "Tríceps Corda", 
                img: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "12 a 15", descanso: "45s",
                desc: "1. Pés paralelos, tronco levemente inclinado.<br>2. Cole os cotovelos nas costelas (eles não se movem).<br>3. Estenda o braço para baixo, abrindo a corda no final do movimento.<br>4. Suba devagar até a altura do peito." 
            },
            { 
                nome: "Tríceps Testa (Barra W)", 
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12", descanso: "60s",
                desc: "1. Deitado, segure a barra com braços esticados.<br>2. Flexione os cotovelos levando a barra em direção à testa.<br>3. Mantenha os cotovelos fechados apontando para o teto.<br>4. Estenda os braços retornando à posição inicial." 
            }
        ],
        B: [
            { 
                nome: "Supino Reto com Halteres", 
                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "10 a 12", descanso: "60s",
                desc: "1. Permite maior amplitude que a barra.<br>2. Desça os halteres até alongar bem o peitoral.<br>3. Suba convergindo os pesos ao centro.<br>4. Mantenha os pulsos firmes." 
            },
            { 
                nome: "Peck Deck (Voador)", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "15", descanso: "45s",
                desc: "1. Ajuste o banco para que as mãos fiquem na altura dos ombros.<br>2. Mantenha a coluna apoiada.<br>3. Feche os braços e segure a contração por 1 segundo.<br>4. Abra controladamente sem soltar o peso de uma vez." 
            },
            { 
                nome: "Flexão de Braço", 
                img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "Até a falha", descanso: "60s",
                desc: "1. Mãos na largura dos ombros.<br>2. Corpo reto, contraia o abdômen.<br>3. Desça até o peito quase tocar o chão.<br>4. Se estiver difícil, apoie os joelhos." 
            },
            { 
                nome: "Tríceps Pulley (Barra Reta)", 
                img: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "12 a 15", descanso: "45s",
                desc: "1. Pegada pronada (palma para baixo).<br>2. Cotovelos fixos ao lado do corpo.<br>3. Empurre a barra até estender totalmente o braço.<br>4. Evite usar o peso do corpo para empurrar." 
            },
            { 
                nome: "Mergulho no Banco", 
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12", descanso: "60s",
                desc: "1. Apoie as mãos na borda do banco.<br>2. Mantenha as costas próximas ao banco durante a descida.<br>3. Desça até os cotovelos formarem 90 graus.<br>4. Suba usando apenas a força dos braços." 
            }
        ]
    },
    terca: {
        titulo: "Terça: Costas e Bíceps",
        A: [
            { 
                nome: "Puxada Alta Frontal", 
                img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "10 a 12", descanso: "60s",
                desc: "1. Pegada aberta na barra.<br>2. Incline levemente o tronco para trás.<br>3. Puxe a barra em direção ao peitoral superior.<br>4. Foque em fechar as escápulas nas costas." 
            },
            { 
                nome: "Remada Baixa (Triângulo)", 
                img: "https://images.unsplash.com/photo-1517963879466-e9b5ce382d5d?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12", descanso: "60s",
                desc: "1. Mantenha a coluna reta e peito estufado.<br>2. Puxe o triângulo em direção ao umbigo.<br>3. Mantenha os cotovelos próximos ao corpo.<br>4. Alongue bem os braços na volta." 
            },
            { 
                nome: "Remada Curvada (Barra)", 
                img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "10", descanso: "60s",
                desc: "1. Pés na largura dos ombros, joelhos semi-flexionados.<br>2. Incline o tronco à frente (quase paralelo ao chão).<br>3. Puxe a barra na direção do abdômen.<br>4. Cuidado para não curvar a coluna." 
            },
            { 
                nome: "Rosca Direta (Barra W)", 
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "10 a 12", descanso: "60s",
                desc: "1. Cotovelos ao lado do corpo.<br>2. Suba a barra até a altura do ombro.<br>3. Desça controladamente.<br>4. Evite balançar o tronco (roubar)." 
            },
            { 
                nome: "Rosca Martelo (Halteres)", 
                img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12 a 15", descanso: "45s",
                desc: "1. Pegada neutra (palmas voltadas para dentro).<br>2. Alterne os braços ou faça simultâneo.<br>3. Foco no braquial e antebraço.<br>4. Movimento completo." 
            }
        ],
        B: [
            { 
                nome: "Barra Fixa (ou Graviton)", 
                img: "https://images.unsplash.com/photo-1598971639058-211a73287750?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "8 a 12", descanso: "90s",
                desc: "1. Pegada aberta.<br>2. Puxe o corpo até o queixo passar da barra.<br>3. Desça até estender totalmente os braços.<br>4. Use o Graviton se precisar de assistência." 
            },
            { 
                nome: "Remada Unilateral (Serrote)", 
                img: "https://images.unsplash.com/photo-1517963879466-e9b5ce382d5d?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12 cada lado", descanso: "45s",
                desc: "1. Apoie um joelho e uma mão no banco.<br>2. Costas retas, paralelas ao chão.<br>3. Puxe o halter em direção ao quadril.<br>4. Não gire o tronco durante a puxada." 
            },
            { 
                nome: "Pulldown com Corda", 
                img: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "15", descanso: "45s",
                desc: "1. Braços estendidos ou semi-flexionados.<br>2. Puxe a corda de cima até as coxas.<br>3. Mantenha o peito estufado.<br>4. Foco total na lateral das costas (dorsal)." 
            },
            { 
                nome: "Rosca Scott (Máquina ou Livre)", 
                img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12", descanso: "60s",
                desc: "1. Apoie bem as axilas no banco.<br>2. Desça a barra até quase estender o braço.<br>3. Suba contraindo o bíceps.<br>4. Não tire o tríceps do apoio." 
            },
            { 
                nome: "Rosca Concentrada", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12 cada lado", descanso: "45s",
                desc: "1. Sentado, apoie o cotovelo na parte interna da coxa.<br>2. Isole o movimento apenas no antebraço.<br>3. Contraia bem no topo.<br>4. Desça devagar." 
            }
        ]
    },
    quarta: {
        titulo: "Quarta: Pernas (Foco Quadríceps)",
        A: [
            { 
                nome: "Agachamento Livre", 
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "10 a 12", descanso: "90s",
                desc: "1. Pés na largura dos ombros.<br>2. Mantenha a coluna neutra e olhar para frente.<br>3. Desça até as coxas ficarem paralelas ao chão (90º).<br>4. Suba empurrando o chão com os calcanhares." 
            },
            { 
                nome: "Leg Press 45º", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "12", descanso: "60s",
                desc: "1. Pés no centro da plataforma.<br>2. Destrave o aparelho e desça até 90 graus.<br>3. Não tire a lombar do banco em momento algum.<br>4. Não estenda totalmente os joelhos na subida." 
            },
            { 
                nome: "Cadeira Extensora", 
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "15 (Drop-set na última)", descanso: "45s",
                desc: "1. Ajuste o encosto para o joelho alinhar com o eixo.<br>2. Estenda as pernas completamente.<br>3. Segure 1 segundo no topo (pico de contração).<br>4. Desça controlando o peso." 
            },
            { 
                nome: "Passada (Afundo) com Halteres", 
                img: "https://images.unsplash.com/photo-1434608519344-49d77a699ded?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12 passadas totais", descanso: "60s",
                desc: "1. Dê um passo largo à frente.<br>2. Desça até o joelho de trás quase tocar o chão.<br>3. O joelho da frente não deve passar muito da ponta do pé.<br>4. Mantenha o tronco ereto." 
            },
            { 
                nome: "Panturrilha Sentado (Banco)", 
                img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "15 a 20", descanso: "30s",
                desc: "1. Apoie a almofada sobre as coxas.<br>2. Desça o calcanhar o máximo possível (alongue).<br>3. Suba o máximo possível (fique na ponta dos pés).<br>4. Movimento com amplitude total." 
            }
        ],
        B: [
            { 
                nome: "Agachamento Hack Machine", 
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "12", descanso: "60s",
                desc: "1. Apoie bem as costas e ombros.<br>2. Pés um pouco à frente para focar no quadríceps.<br>3. Desça profundo.<br>4. Empurre com força total na subida." 
            },
            { 
                nome: "Agachamento Búlgaro", 
                img: "https://images.unsplash.com/photo-1434608519344-49d77a699ded?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "10 cada perna", descanso: "60s",
                desc: "1. Apoie o peito do pé de trás em um banco.<br>2. Mantenha o tronco levemente inclinado à frente.<br>3. Desça até o joelho de trás aproximar do chão.<br>4. Força na perna da frente." 
            },
            { 
                nome: "Agachamento Sumô (Halter)", 
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12", descanso: "60s",
                desc: "1. Pés bem afastados, pontas para fora.<br>2. Segure o halter com as duas mãos no centro.<br>3. Desça mantendo os joelhos na direção da ponta dos pés.<br>4. Foca na parte interna da coxa." 
            },
            { 
                nome: "Cadeira Adutora", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "15", descanso: "45s",
                desc: "1. Sente-se e apoie as costas.<br>2. Feche as pernas com força.<br>3. Segure 1 segundo no miolo.<br>4. Abra controladamente." 
            },
            { 
                nome: "Panturrilha no Leg Press", 
                img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "15", descanso: "30s",
                desc: "1. Apoie apenas a ponta dos pés na base.<br>2. Empurre a plataforma usando os tornozelos.<br>3. Mantenha os joelhos levemente flexionados (segurança).<br>4. Amplitude máxima." 
            }
        ]
    },
    quinta: {
        titulo: "Quinta: Ombros e Abdômen",
        A: [
            { 
                nome: "Desenvolvimento com Halteres", 
                img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "10 a 12", descanso: "60s",
                desc: "1. Sentado com costas apoiadas.<br>2. Inicie com halteres na altura das orelhas.<br>3. Empurre para cima até estender os braços.<br>4. Desça devagar até a posição inicial." 
            },
            { 
                nome: "Elevação Lateral", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "12 a 15", descanso: "45s",
                desc: "1. Em pé, cotovelos levemente flexionados.<br>2. Levante os braços até a altura dos ombros.<br>3. Imagine que está despejando uma jarra de água.<br>4. Não balance o corpo." 
            },
            { 
                nome: "Elevação Frontal (Barra ou Anilha)", 
                img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12", descanso: "45s",
                desc: "1. Segure a anilha/barra na frente da coxa.<br>2. Suba até a altura dos olhos.<br>3. Mantenha o abdômen contraído para não forçar a lombar.<br>4. Desça controlando o peso." 
            },
            { 
                nome: "Prancha Abdominal (Isometria)", 
                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "30 a 60 segundos", descanso: "60s",
                desc: "1. Apoie antebraços e ponta dos pés.<br>2. Corpo reto como uma tábua.<br>3. Contraia glúteos e abdômen fortemente.<br>4. Não deixe o quadril cair." 
            },
            { 
                nome: "Abdominal Infra (Elevação de Pernas)", 
                img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "15", descanso: "45s",
                desc: "1. Deitado, mãos embaixo do quadril.<br>2. Mantenha as pernas esticadas.<br>3. Eleve as pernas até formar 90 graus.<br>4. Desça sem encostar os pés no chão." 
            }
        ],
        B: [
            { 
                nome: "Desenvolvimento Militar (Barra)", 
                img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "10", descanso: "60s",
                desc: "1. Pode ser feito em pé ou sentado.<br>2. Barra desce até a altura do queixo/peito alto.<br>3. Empurre a barra para cima da cabeça.<br>4. Cuidado para não arquear as costas." 
            },
            { 
                nome: "Crucifixo Inverso (Posterior de Ombro)", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "15", descanso: "45s",
                desc: "1. Use o Voador Inverso ou halteres.<br>2. Braços na altura dos ombros.<br>3. Abra os braços focando na parte de trás do ombro.<br>4. Movimento curto e concentrado." 
            },
            { 
                nome: "Remada Alta (Barra ou Polia)", 
                img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12", descanso: "45s",
                desc: "1. Pegada fechada na barra.<br>2. Puxe a barra rente ao corpo até o peito.<br>3. Os cotovelos devem apontar para cima (orelhas).<br>4. Não suba além da linha do ombro." 
            },
            { 
                nome: "Abdominal Supra (Máquina ou Chão)", 
                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "20", descanso: "45s",
                desc: "1. Flexione o tronco para frente.<br>2. Solte todo o ar na contração máxima.<br>3. Volte devagar inspirando.<br>4. Não puxe o pescoço com as mãos." 
            },
            { 
                nome: "Russian Twist (Giro Russo)", 
                img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "20 giros totais", descanso: "45s",
                desc: "1. Sentado, tire os pés do chão.<br>2. Segure um peso (anilha/bola).<br>3. Gire o tronco tocando o peso de um lado e do outro.<br>4. Mantenha o equilíbrio." 
            }
        ]
    },
    sexta: {
        titulo: "Sexta: Posterior e Glúteo",
        A: [
            { 
                nome: "Stiff com Barra", 
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "10 a 12", descanso: "60s",
                desc: "1. Pés na largura do quadril, joelhos semi-flexionados.<br>2. Desça a barra rente às pernas.<br>3. Mantenha a coluna reta (empine o quadril).<br>4. Desça até sentir alongar o posterior." 
            },
            { 
                nome: "Mesa Flexora", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "12", descanso: "45s",
                desc: "1. Deite-se e alinhe o joelho com o eixo.<br>2. Flexione as pernas até encostar no glúteo se possível.<br>3. Não tire o quadril do banco na subida.<br>4. Controle a descida." 
            },
            { 
                nome: "Elevação Pélvica", 
                img: "https://images.unsplash.com/photo-1434608519344-49d77a699ded?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "10 a 12 (com peso)", descanso: "90s",
                desc: "1. Apoie as escápulas no banco.<br>2. Coloque a barra sobre o quadril.<br>3. Suba o quadril e contraia o glúteo no topo por 2 segundos.<br>4. Mantenha o queixo no peito." 
            },
            { 
                nome: "Cadeira Flexora", 
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "15", descanso: "45s",
                desc: "1. Ajuste o encosto para travar bem a coxa.<br>2. Flexione as pernas para baixo.<br>3. Amplitude total de movimento.<br>4. Movimento contínuo." 
            },
            { 
                nome: "Glúteo Caneleira (4 Apoios)", 
                img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "15 cada lado", descanso: "30s",
                desc: "1. Apoie joelhos e cotovelos no colchonete.<br>2. Chute a perna para cima (coice).<br>3. Contraia o glúteo no topo.<br>4. Não balance a lombar." 
            }
        ],
        B: [
            { 
                nome: "Levantamento Terra", 
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "8 a 10", descanso: "90s",
                desc: "1. Pés firmes, barra no meio dos pés.<br>2. Agache para pegar a barra com coluna reta.<br>3. Levante estendendo joelhos e quadril juntos.<br>4. Termine com o corpo ereto." 
            },
            { 
                nome: "Afundo Búlgaro (Foco Glúteo)", 
                img: "https://images.unsplash.com/photo-1434608519344-49d77a699ded?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "10 cada lado", descanso: "60s",
                desc: "1. Pé de trás no banco.<br>2. Incline o tronco para frente para ativar mais o glúteo.<br>3. Desça profundo.<br>4. Empurre com o calcanhar da frente." 
            },
            { 
                nome: "Cadeira Abdutora", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "20", descanso: "45s",
                desc: "1. Incline o tronco para frente (segure na máquina).<br>2. Abra as pernas o máximo possível.<br>3. Segure 1 segundo aberto.<br>4. Feche devagar." 
            },
            { 
                nome: "Flexora em Pé Unilateral", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12 cada lado", descanso: "30s",
                desc: "1. Apoie o peito na máquina.<br>2. Flexione uma perna de cada vez.<br>3. Foque em isolar o posterior da coxa.<br>4. Sem trancos." 
            },
            { 
                nome: "Agachamento Sumô (Polia/Step)", 
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "15", descanso: "60s",
                desc: "1. Use steps para aumentar a amplitude.<br>2. Segure o peso no centro.<br>3. Desça o máximo que conseguir.<br>4. Foco em glúteos e adutores." 
            }
        ]
    },
    sabado: {
        titulo: "Sábado: Full Body / Cardio",
        A: [
            { 
                nome: "Burpees", 
                img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "10 a 15", descanso: "60s",
                desc: "1. Agache e coloque as mãos no chão.<br>2. Jogue os pés para trás (prancha).<br>3. Faça uma flexão (opcional).<br>4. Puxe os pés e salte esticando o corpo." 
            },
            { 
                nome: "Kettlebell Swing", 
                img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "20", descanso: "45s",
                desc: "1. Pés afastados, segure o peso no centro.<br>2. Flexione levemente os joelhos e jogue o peso entre as pernas.<br>3. Estenda o quadril com explosão, elevando o peso.<br>4. A força vem do quadril, não do braço." 
            },
            { 
                nome: "Polichinelos", 
                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "1 minuto", descanso: "30s",
                desc: "1. Em pé, pés unidos.<br>2. Salte abrindo as pernas e elevando os braços.<br>3. Salte fechando as pernas e baixando os braços.<br>4. Mantenha um ritmo constante." 
            },
            { 
                nome: "Agachamento com Salto", 
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "15", descanso: "60s",
                desc: "1. Faça o agachamento normal.<br>2. Na subida, exploda em um salto.<br>3. Amorteca a queda já flexionando os joelhos.<br>4. Não caia com o joelho duro." 
            },
            { 
                nome: "Corrida na Esteira (HIIT)", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "10 Tiros", reps: "1min Correndo / 1min Andando", descanso: "-",
                desc: "1. Intercale alta intensidade com descanso ativo.<br>2. 1 minuto correndo rápido.<br>3. 1 minuto caminhando para recuperar.<br>4. Repita por 20 minutos totais." 
            }
        ],
        B: [
            { 
                nome: "Pular Corda", 
                img: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "2 minutos", descanso: "1 min",
                desc: "1. Mantenha os cotovelos próximos ao corpo.<br>2. Gire a corda com os punhos.<br>3. Saltos curtos na ponta dos pés.<br>4. Ritmo constante." 
            },
            { 
                nome: "Box Jumps (Salto na Caixa)", 
                img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80", 
                series: "3 Séries", reps: "12", descanso: "60s",
                desc: "1. Fique de frente para a caixa.<br>2. Agache levemente e salte com os dois pés.<br>3. Aterrisse suavemente em cima da caixa.<br>4. Estenda o corpo totalmente antes de descer." 
            },
            { 
                nome: "Mountain Climbers (Escalador)", 
                img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "30 segundos", descanso: "30s",
                desc: "1. Posição de prancha alta (mãos no chão).<br>2. Traga um joelho em direção ao peito.<br>3. Troque as pernas rapidamente como se estivesse correndo.<br>4. Mantenha o quadril baixo." 
            },
            { 
                nome: "Battle Ropes (Corda Naval)", 
                img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80", 
                series: "4 Séries", reps: "30 segundos", descanso: "30s",
                desc: "1. Base de agachamento isométrico.<br>2. Movimente os braços alternadamente criando ondas na corda.<br>3. Mantenha o core firme.<br>4. Acelere o movimento." 
            },
            { 
                nome: "Bike ou Elíptico", 
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80", 
                series: "1 Série", reps: "20 minutos", descanso: "-",
                desc: "1. Carga moderada a pesada.<br>2. Mantenha uma rotação constante.<br>3. Ótimo para finalizar o treino sem impacto." 
            }
        ]
    }
};

// --- FUNÇÃO DE RENDERIZAÇÃO ---
function renderTreino(dia) {
    const container = document.getElementById('exercises-container');
    const titleElement = document.getElementById('page-title');
    const semanaInfo = document.getElementById('week-info');
    
    // Define qual lista usar (A ou B)
    const treinoList = isWeekA ? exercicios[dia].A : exercicios[dia].B;
    const weekName = isWeekA ? "Semana A (Ímpar)" : "Semana B (Par)";

    // Atualiza Títulos
    if(titleElement) titleElement.innerText = exercicios[dia].titulo;
    if(semanaInfo) semanaInfo.innerText = `Ciclo Atual: ${weekName} (Muda automaticamente)`;

    // Limpa container
    container.innerHTML = "";

    // Gera o HTML
    treinoList.forEach((exercicio, index) => {
        const html = `
        <div class="exercise-card">
            <div class="ex-img-container">
                <img src="${exercicio.img}" class="ex-img" alt="${exercicio.nome}" loading="lazy">
            </div>
            <div class="ex-content">
                <div class="ex-name">${index + 1}. ${exercicio.nome}</div>
                <div class="ex-stats">
                    <span class="badge">📝 ${exercicio.series}</span>
                    <span class="badge">🔄 ${exercicio.reps}</span>
                    <span class="badge">⏱ ${exercicio.descanso}</span>
                </div>
                <div class="instruction-box">
                    <div class="instruction-title">Como fazer:</div>
                    <div class="instruction-text">
                        ${exercicio.desc}
                    </div>
                </div>
            </div>
        </div>
        `;
        container.innerHTML += html;
    });
}