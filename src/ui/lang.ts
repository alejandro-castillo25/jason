export type Lang = "es" | "en" | "pt" | "fr" | "system";

export function toES(value: string): string {
  const settings = {
    "Word wrap": "Ajuste de línea",
    "Show object size": "Mostrar tamaño de objeto",
    "Bracket guides": "Guías de corchetes",
    "Colorized brackets guides": "Guías de corchetes coloreadas",
    "Brackets guides opacity": "Opacidad de corchetes guías",
    "Indentation size": "Tamaño de indentación",
    Color: "Color",
    Theme: "Tema",
    Language: "Idioma",
    "Show paths": "Mostrar rutas",
    "Show nearest parent only": "Mostrar solo el padre más cercano",
    "Dynamic header": "Encabezado dinámico",
    "Format file if possible": "Formatear archivo si es posible",

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
    Violet: "Violeta",
    Magenta: "Magenta",
    Turquoise: "Turquesa",
    Brown: "Marrón",
    Sapphire: "Zafiro",
    Purple: "Morado",
    Coral: "Coral",
    Olive: "Oliva",
    Emerald: "Esmeralda"
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
      "Por favor crea un workflow o carga un archivo para comenzar a editar su contenido",
    "Close file": "Cerrar archivo",
    Close: "Cerrar",
    Delete: "Eliminar",
    ...settings,
  };

  return dict[value] ?? value;
}

export function toPT(value: string): string {
  const settings = {
    "Word wrap": "Quebra de linha",
    "Show object size": "Mostrar tamanho do objeto",
    "Bracket guides": "Guias de colchetes",
    "Colorized bracket guides": "Guias de colchetes coloridos",
    "Brackets guides opacity": "Opacidade dos colchetes guias",

    "Indentation size": "Tamanho do indentação",
    Color: "Cor",
    Theme: "Tema",
    Language: "Idioma",
    "Show paths": "Mostrar caminhos",
    "Show nearest parent only": "Mostrar somente o pai mais próximo",
    "Dynamic header": " Cabeçalho dinâmico",
    "Format file if possible": "Formatar arquivo se possível",

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
    Magenta: "Magenta",
    Turquoise: "Turquesa",
    Brown: "Marrom",
    Sapphire: "Safira",
    Purple: "Roxo",
    Coral: "Coral",
    Olive: "Oliva",
    Emerald: "Esmeralda",
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
      "Por favor crie um workflow ou carregue um arquivo para começar a editar seu conteúdo",

    "Close file": "Fechar arquivo",
    Close: "Fechar",
    Delete: "Excluir",
    ...settings,
  };

  return dict[value] ?? value;
}

export function toFR(value: string): string {
  const settings = {
    "Word wrap": "Retour à la ligne",
    "Show object size": "Afficher la taille de l'objet",
    "Bracket guides": "Guides de crochets",
    "Colorized brackets guides": "Guides de crochets colorés",
    "Brackets guides opacity": "Opacité des crochets guides",

    "Indentation size": "Taille de l'indentation",
    Color: "Couleur",
    Theme: "Thème",
    Language: "Langue",
    "Show paths": "Afficher les chemins",
    "Show nearest parent only": "Afficher uniquement le parent le plus proche",
    "Dynamic header": "En-tête dynamique",
    "Format file if possible": "Formatter le fichier si possible",
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
    Magenta: "Magenta",
    Turquoise: "Turquoise",
    Brown: "Marron",
    Sapphire: "Saphir",
    Purple: "Pourpre",
    Coral: "Corail",
    Olive: "Olive",
    Emerald: "Émeraude",
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
    ...settings,
  };

  return dict[value] ?? value;
}
export function translateTo(lang: Lang, value: string) {
  if (lang === "es") return toES(value);
  if (lang === "pt") return toPT(value);
  if (lang === "fr") return toFR(value);

  if (lang === "system")
    return translateTo(
      (navigator.language.split("-").shift() ?? navigator.language) as Lang,
      value
    );

  return value;
}

export function getLiteralLanguage(lang: Exclude<Lang, "system">) {
  const dict: Record<Exclude<Lang, "system">, string> = {
    en: "English",
    es: "Spanish",
    pt: "Portuguese",
    fr: "French",
  };

  return dict[lang];
}
