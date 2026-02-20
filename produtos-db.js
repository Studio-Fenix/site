/* BANCO DE DADOS DA LOJA - STUDIO FÊNIX */

const productsDB = [
    // ==========================================
    // PROTEÍNAS
    // ==========================================
    { 
        cat: 'Proteínas', 
        name: 'Probiótica 100% Pure Whey (Morango)', 
        desc: '21g de proteína e 4.863mg de BCAA por porção.', 
        img: 'https://supleylab.vtexassets.com/arquivos/ids/158680/PROB-PURE-WHEY-REFIL-MORANGO--1-.jpg.jpg?v=638814560916700000', 
        preco: '', 
        precoFenix: '',
        featured: true 
    },
    { 
        cat: 'Proteínas', 
        name: 'Adaptogen Gold Whey (Chocomaltine)', 
        desc: 'Whey protein concentrado com 20g de proteína, 4,7g de BCAA.', 
        img: 'https://m.media-amazon.com/images/I/715gLNqEfGL.jpg',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Proteínas', 
        name: 'Integralmedica 100% Pure (Morango)', 
        desc: 'Concentrado proteico com 20g de proteína e 4g de BCAA.', 
        img: 'https://io.convertiez.com.br/m/farmaciasheroos/shop/products/images/91138/large/whey-100-morango-sache-907g_55350.png',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Proteínas', 
        name: 'Integralmedica 100% Pure (Gelatto di Latte)', 
        desc: 'Edição especial com 21g de proteína e 9g de EAA.', 
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_827990-MLA99448338924_112025-F.webp',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Proteínas', 
        name: 'Darkness Hardcore Whey (Chocolate)', 
        desc: 'Whey concentrado de rápida absorção, 20g de proteína.', 
        img: 'https://cdn.awsli.com.br/2500x2500/2404/2404599/produto/252433497/whey-dark-mockup-chocolate-maltado-6r3lqgpgpx.jpg',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Proteínas', 
        name: 'Darkness Dark Whey (Baunilha)', 
        desc: 'Suplemento de whey protein concentrado 100% hardcore.', 
        img: 'https://cdn.shopify.com/s/files/1/0742/9632/8446/files/whey-protein-concentrado-dark-whey-baunilha.png?v=1764780266',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Proteínas', 
        name: 'Dux Nutrition Whey (Chocolate Branco)', 
        desc: 'Proteína pura e completa do soro do leite.', 
        img: 'https://emporio4estrelas.vtexassets.com/arquivos/ids/235855/Whey-Protein-Concentrado-Chocolate-Branco-900g-DUX-Human-Health-ProImagem-17524.jpg',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Proteínas', 
        name: 'Dux Nutrition Whey (Baunilha)', 
        desc: 'Suplemento alimentar em pó 100% concentrado.', 
        img: 'https://emporio4estrelas.vtexassets.com/arquivos/ids/235861/Whey-Protein-Concentrado-Baunilha-900g-DUX-Human-Health-ProImagem-17530.jpg',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Proteínas', 
        name: 'Atlhetica Best Whey (Achocolatado Toddy)', 
        desc: 'Sabor característico de Toddy, 25g de proteína.', 
        img: 'https://tfbrnp.vtexassets.com/arquivos/ids/165456/BW_TODDY_ECOMM_MOCKUPS_900G.png',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Proteínas', 
        name: 'NewNutrition Whey Protein (Chocolate)', 
        desc: 'Contém 23g de proteína, 4,9g de BCAA.', 
        img: 'https://www.drogasil.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F4355339.webp&w=3840&q=40',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Proteínas', 
        name: 'Adaptogen Tasty Whey (Chocomaltine)', 
        desc: '24g de proteína, 5,3g de BCAA e pedaços reais de chocolate.', 
        img: 'https://http2.mlstatic.com/D_NQ_NP_2X_635992-MLA99998896823_112025-F.webp',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Proteínas', 
        name: 'Nutra Gold Whey 3W (Açaí)', 
        desc: 'Blend proteico com 32g de proteína.', 
        img: 'https://http2.mlstatic.com/D_Q_NP_926374-MLA94139366965_102025-O.webp',
        preco: '', 
        precoFenix: '' 
    },
    
    // ==========================================
    // CREATINAS
    // ==========================================
    { 
        cat: 'Creatinas', 
        name: 'Atlhetica Nutrition Creatina 100% Pura', 
        desc: 'Sem sabor, 300g (Pague 250g + Leve 50g grátis).', 
        img: 'https://http2.mlstatic.com/D_NQ_NP_957062-MLB89537967099_082025-O.webp', 
        preco: '', 
        precoFenix: '',
        featured: true 
    },
    { 
        cat: 'Creatinas', 
        name: 'Dux Nutrition Creatina', 
        desc: '100% pura e monoidratada de alta pureza.', 
        img: 'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F11506740.webp&w=3840&q=40',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Creatinas', 
        name: 'Integralmedica Creatina Hardcore (Limão)', 
        desc: 'Zero carbo (Pague 300g e leve 350g).', 
        img: 'https://i3-imagens-prd.araujo.com.br/webp/108169/202717_7896311777570_1.webp',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Creatinas', 
        name: 'Nutrata Creatine Up', 
        desc: '100% pura, monohidratada e micronizada.', 
        img: 'https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F14979495.webp&w=3840&q=40',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Creatinas', 
        name: 'NewNutrition Creatina Monoidratada', 
        desc: 'Micronizada de máxima absorção 150g.', 
        img: 'https://io.convertiez.com.br/m/newnutrition/shop/products/images/118785/large/creatina-150g_3125.png',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Creatinas', 
        name: 'NewNutrition Creatina Gummy (Uva Verde)', 
        desc: 'Pastilha de goma, 3g de creatina por porção.', 
        img: 'https://io.convertiez.com.br/m/newnutrition/shop/products/images/118891/large/creatina-gummy_3803.jpg',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Creatinas', 
        name: 'Max Titanium Creatine', 
        desc: 'Monoidratada com 0% de sódio.', 
        img: 'https://lojamaxtitanium.vtexassets.com/arquivos/ids/159964-1366-0/Creatine%20-%20300g%20-%20Frente.png',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Creatinas', 
        name: 'Demons Lab Creatine', 
        desc: 'Creatina monoidratada em pó sem sabor.', 
        img: 'https://cdn.awsli.com.br/732/732538/produto/350951683/unit-rio---sem-sabor-79uahw1uhh.png',
        preco: '', 
        precoFenix: '' 
    },
    
    // ==========================================
    // PRÉ-TREINOS
    // ==========================================
    { 
        cat: 'Pré-Treinos', 
        name: 'Darkness Évora PW (Neon Berry)', 
        desc: 'Pré-treino para treinos extremos contendo cafeína.', 
        img: 'https://product-data.raiadrogasil.io/images/17799417.webp', 
        preco: '', 
        precoFenix: '',
        featured: true 
    },
    { 
        cat: 'Pré-Treinos', 
        name: 'Darkness Évora PW (Uva)', 
        desc: 'Alta intensidade: beta-alanina, taurina e cafeína.', 
        img: 'https://io.convertiez.com.br/m/drogalider/shop/products/images/33888/large/pre-treino-evora-darkness-uva-300g_25725.jpg',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Pré-Treinos', 
        name: 'Demons Lab Psycho Killer', 
        desc: 'Pré-treino potente ("The Strongest") em pó.', 
        img: 'https://static.netshoes.com.br/produtos/pre-treino-psicho-killer-fruit-punch-300g-demons-lab/41/NSC-2213-A41/NSC-2213-A41_zoom1.jpg',
        preco: '', 
        precoFenix: '' 
    },
    { 
        cat: 'Pré-Treinos', 
        name: 'Caffeine Army Super Coffee (Doce de Leite)', 
        desc: 'Bebida energética com café, taurina, MCT e chá verde.', 
        img: 'https://www.caffeinearmy.com.br/cdn/shop/files/tamanho_220g_sabor_doce_de_leite_posi_o_frontal_1.webp',
        preco: '', 
        precoFenix: '' 
    },

    // ==========================================
    // ACESSÓRIOS
    // ==========================================
    { 
        cat: 'Acessórios', 
        name: 'Coqueteleira Oficial Studio Fênix', 
        desc: 'Ideal para misturar e levar seus suplementos com segurança.', 
        img: 'https://raw.githubusercontent.com/Studio-Fenix/site/refs/heads/main/Loja/coqueteleira-fenix.png',
        preco: '80,00', 
        precoFenix: '70,00' 
    },
    { 
        cat: 'Acessórios', 
        name: 'Camisa Oficial Studio Fênix (Preta)', 
        desc: 'Vista a camisa do seu estúdio. Conforto e muito estilo para o seu treino.', 
        img: 'https://raw.githubusercontent.com/Studio-Fenix/site/refs/heads/main/Loja/camisa-fenix.png',
        preco: '130,00', 
        precoFenix: '120,00' 
    }
];