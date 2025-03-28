export type Lang = "es" | "en" | "pt" | "fr";

export function toES(value: string): string {
  const settings = {
    "Word Wrap": "Ajuste de Línea",
    "Show Object Size": "Mostrar Tamaño de Objeto",
    "Bracket Guides": "Guías de Corchetes",
    "Colorized Brackets Guides": "Guías de Corchetes Coloreadas",
    "Indentation Size": "Tamaño de Indentación",
    Color: "Color",
    Theme: "Tema",
    Language: "Idioma",
    "Show Paths": "Mostrar Rutas",
    "Show Parent Only": "Mostrar solo el Padre",
    English: "Inglés",
    Spanish: "Español",
    Portuguese: "Portugués",
    French: "Francés",
    Dark: "Oscuro",
    Light: "Claro",
    System: "Sistema",


    Blue: "Azul",
    Orange: "Naranja",
    Red: "Rojo",
    Green: "Verde",
    Yellow: "Amarillo",
    Rose: "Rosa",
    Zing: "Zinc",
    Violet: "Violeta"
  } as const;

  const dict: Record<string, string> = {
    "Create new": "Crear nuevo",
    "Load file": "Cargar archivo",
    "Paste text": "Pegar texto",
    Save: "Guardar",
    "Save as": "Guardar como",
    Settings: "Ajustes",
    Clear: "Limpiar",
    Options: "Opciones",

    Edit: "Editar",
    "Edit Array": "Editar Array",
    "Edit Object": "Editar Objeto",
    Object: "Objeto",

    "Edit Value": "Editar Valor",
    "Add Object": "Agregar Objeto",
    "Add Array": "Agregar Array",
    "Add Value": "Agregar Valor",

    "Add from Text": "Agregar desde Texto",
    "Copy Path": "Copiar Ruta",

    "You can't add an item with an empty key!":
      "No puedes añadir un item con una clave vacía",
    "This number is too small!": "¡Este número es demasiado pequeño!",
    "This number is too big!": "¡Este número es demasiado grande!",
    "That's not a right number!": "¡No es un numero válido!",

    Key: "Clave",
    Value: "Valor",

    "Copy Value": "Copiar Valor",

    String: "String",
    Number: "Número",
    Boolean: "Booleano",
    Null: "Nulo",

    Remove: "Eliminar",

    "Open URL": "Abrir URL",
    Root: "Raíz",
    file: "archivo",
    Create: "Crear",
    Cancel: "Cancelar",
    "File Type": "Tipo de Archivo",
    "Choose the file format": "Elige el formato de archivo",
    "Please create a workflow or load a file to begin editing its contents":
      "Por favor crea un workflow o carga un archivo para comenzar a editar con su contenido",
    "Close file": "Cerrar archivo",
    Close: "Cerrar",
    Delete: "Eliminar",
    ...settings,
  };

  return dict[value] ?? value;
}

export function toPT(value: string): string {
  const settings = {
    "Word Wrap": "Quebra de Linha",
    "Show Object Size": "Mostrar Tamanho do Objeto",
    "Bracket Guides": "Guias de Colchetes",
    "Colorized Bracket Guides": "Guias de Colchetes Coloridos",
    "Indentation Size": "Tamanho do Indentação",
    Color: "Cor",
    Theme: "Tema",
    Language: "Idioma",
    "Show Paths": "Mostrar Caminhos",
    "Show Parent Only": "Mostrar somente o Pai",
    English: "Inglês",
    Spanish: "Espanhol",
    Portuguese: "Português",
    French: "Francês",
    Dark: "Escuro",
    Light: "Claro",
    System: "Sistema",

    Blue: "Azul",
    Orange: "Laranja",
    Red: "Vermelho",
    Green: "Verde",
    Yellow: "Amarelo",
    Rose: "Rosa",
    Zing: "Zinco",
    Violet: "Violeta",
  } as const;
  const dict: Record<string, string> = {
    "Create new": "Criar novo",
    "Load file": "Carregar arquivo",
    "Paste text": "Colar texto",
    Save: "Salvar",
    "Save as": "Salvar como",
    Settings: "Configurações",
    Clear: "Limpar",
    Options: "Opções",

    Edit: "Editar",
    "Edit Array": "Editar Array",
    "Edit Object": "Editar Objeto",
    Object: "Objeto",
    "Edit Value": "Editar Valor",
    "Add Object": "Adicionar Objeto",
    "Add Array": "Adicionar Array",
    "Add Value": "Adicionar Valor",

    "Add from Text": "Adicionar de Texto",
    "Copy Path": "Copiar Caminho",

    "You can't add an item with an empty key!":
      "Você não pode adicionar um item com chave vazia!",
    "This number is too small!": "Este número é muito pequeno!",
    "This number is too big!": "Este número é muito grande!",
    "That's not a right number!": "Não é um número válido!",

    Key: "Chave",
    Value: "Valor",

    "Copy Value": "Copiar Valor",

    String: "String",
    Number: "Número",
    Boolean: "Booleano",
    Null: "Nulo",

    Remove: "Remover",
    Root: "Raíz",
    "Open URL": "Abrir URL",
    file: "arquivo",
    Create: "Criar",
    Cancel: "Cancelar",
    "File Type": "Tipo de Arquivo",
    "Choose the file format": "Escolha o formato do arquivo",

    "Please create a workflow or load a file to begin editing its contents":
      "Por favor, crie um fluxo de trabalho ou carregue um arquivo para começar a editar seu conteúdo",

    "Close file": "Fechar arquivo",
    Close: "Fechar",
    Delete: "Excluir",
    ...settings
  };

  return dict[value] ?? value;
}

export function toFR(value: string): string {
  const settings = {
    "Word Wrap": "Retour à la Ligne",
    "Show Object Size": "Afficher la Taille de l'objet",
    "Bracket Guides": "Guides de Crochets",
    "Colorized Brackets Guides": "Guides de Crochets Colorés",
    "Indentation Size": "Taille de l'indentation",
    Color: "Couleur",
    Theme: "Thème",
    Language: "Langue",
    "Show Paths": "Afficher les Chemins",
    "Show Parent Only": "Afficher Uniquement le Parent",
    English: "Anglais",
    Spanish: "Espagnol",
    Portuguese: "Portugais",
    French: "Français",
    Dark: "Sombre",
    Light: "Clair",
    System: "Système",

    Blue: "Bleu",
    Orange: "Orange",
    Red: "Rouge",
    Green: "Vert",
    Yellow: "Jaune",
    Rose: "Rose",
    Zing: "Zinc",
    Violet: "Violet",
  } as const;

  const dict: Record<string, string> = {
    "Create New": "Créer nouveau",
    "Load file": "Charger fichier",
    "Paste text": "Coller texte",
    Save: "Enregistrer",
    "Save as": "Enregistrer sous",
    Settings: "Paramètres",
    Clear: "Effacer",
    Options: "Options",

    Edit: "Éditer",
    "Edit Array": "Éditer Array",
    "Edit Object": "Éditer Objet",
    Object: "Objet",
    "Edit Value": "Éditer Valeur",
    "Add Object": "Ajouter Objet",
    "Add Array": "Ajouter Array",
    "Add Value": "Ajouter Valeur",

    "Add from Text": "Ajouter Depuis Texte",
    "Copy Path": "Copier Chemin",

    "You can't add an item with an empty key!":
      "Vous ne pouvez pas ajouter un élément avec une clé vide !",
    "This number is too small!": "Ce nombre est trop petit !",
    "This number is too big!": "Ce nombre est trop grand !",
    "That's not a right number!": "Ce n'est pas un nombre valide !",

    Key: "Clé",
    Value: "Valeur",

    "Copy Value": "Copier Valeur",

    String: "String",
    Number: "Nombre",
    Boolean: "Booléen",
    Null: "Null",

    Remove: "Supprimer",
    "Open URL": "Ouvrir l'URL",
    Root: "Racine",
    file: "fichier",
    Create: "Créer",
    Cancel: "Annuler",
    "File Type": "Type de Fichier",
    "Choose the file format": "Choisissez le format de fichier",
    "Please create a workflow or load a file to begin editing its contents":
      "Veuillez créer un workflow ou charger un fichier pour commencer à modifier son contenu",
    "Close file": "Fermer le fichier",
    Close: "Fermer",
    Delete: "Supprimer",
    ...settings
  };

  return dict[value] ?? value;
}
export function translateTo(lang: Lang, value: string) {
  if (lang === "es") return toES(value);
  if (lang === "pt") return toPT(value);
  if (lang === "fr") return toFR(value);

  return value;
}

export function getLiteralLanguage(lang: Lang) {
  const dict: Record<Lang, string> = {
    en: "English",
    es: "Spanish",
    pt: "Portuguese",
    fr: "French",
  };

  return dict[lang];
}
