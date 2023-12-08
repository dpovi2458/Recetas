// recipesData.js
const peruvianRecipes = [
  {
    id: 1,
    name: 'Ceviche',
    image: 'https://walac.pe/wp-content/uploads/2016/06/ceviche.jpg',
    description: 'Plato bandera del Perú a base de pescado crudo marinado en jugo de limón.',
    ingredients: [
      { name: 'pescado blanco', quantity: '600 g' },
      { name: 'jugo de limón', quantity: '10 unidades' },
      { name: 'cebolla roja', quantity: '1 unidad' },
      { name: 'ají limo', quantity: 'al gusto' },
      { name: 'sal', quantity: 'al gusto' },
      { name: 'pimienta', quantity: 'al gusto' },
      { name: 'cilantro picado', quantity: 'al gusto' },
      { name: 'choclo cocido', quantity: 'al gusto' },
      { name: 'camote cocido', quantity: 'al gusto' }
    ],
    instructions: 'Corta el pescado en cubos y colócalo en un bol,exprime los limones y vierte el jugo sobre el pescado,agrega sal, pimienta y ají limo al gusto,deja marinar durante 10 minutos,agrega la cebolla roja cortada en juliana y el cilantro picado,sirve con choclo y camote cocidos.'
  },
  {
    id: 2,
    name: 'Lomo Saltado',
    image: 'https://cocina-casera.com/wp-content/uploads/2017/12/Lomosaltado2.jpg',
    description: 'Carne de res salteada, símbolo de la cocina fusión peruano-china, servida con arroz y papas fritas.',
    ingredients: [
      { name: 'lomo de res', quantity: '500 g' },
      { name: 'cebollas', quantity: '2 unidades' },
      { name: 'tomates', quantity: '3 unidades' },
      { name: 'ají amarillo', quantity: 'al gusto' },
      { name: 'soya', quantity: 'al gusto' },
      { name: 'vinagre', quantity: 'al gusto' },
      { name: 'papas fritas', quantity: 'al gusto' },
      { name: 'arroz blanco', quantity: 'al gusto' }
    ],
    instructions: 'Corta el lomo de res en tiras y saltéalo en un wok con un poco de aceite,añade las cebollas y los tomates cortados en juliana, y el ají amarillo,agrega la salsa de soya y el vinagre al gusto,sirve con papas fritas y arroz blanco.'
  },
  
  // ... más recetas
];

peruvianRecipes.forEach(recipe => {
  recipe.instructions = recipe.instructions.split('\n').sort().join('\n');
});

export default peruvianRecipes;