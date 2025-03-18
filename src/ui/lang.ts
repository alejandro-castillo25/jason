export type Lang = "es" | "en" | "pt" | "fr";

export function toES(value: string): string {
  const dict: Record<string, string> = {
    "Create New": "Crear Nuevo",
    "Load File": "Cargar Archivo",
    "Paste Text": "Pegar Texto",
    "Save As": "Guardar Como",
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
    
    "Add From Text": "Agregar Desde Texto",
    "Copy Path": "Copiar Ruta",
    
    "You can't add an item with an empty key!":
    "No puedes añadir un item con una clave vacía",
    "This number is too small!": "¡Este número es demasiado pequeño!",
    "This number is too big!": "¡Este número es demasiado grande!",
    "That's not a right number!": "¡No es un numero válido!",
    
    Key: "Clave",
    Value: "Valor",
    
    String: "String",
    Number: "Número",
    Boolean: "Booleano",
    Null: "Nulo",
    
    Remove: "Eliminar",
    
    "Open URL": "Abrir URL",
    Root: "Raíz",
    file: "archivo",
    Create: "Crear",
  };

  return dict[value] ?? value;
}

export function toPT(value: string): string {
  const dict: Record<string, string> = {
    "Create New": "Criar Novo",
    "Load File": "Carregar Arquivo",
    "Paste Text": "Colar Texto",
    "Save As": "Salvar Como",
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

    "Add From Text": "Adicionar de Texto",
    "Copy Path": "Copiar Caminho",

    "You can't add an item with an empty key!":
      "Você não pode adicionar um item com chave vazia!",
    "This number is too small!": "Este número é muito pequeno!",
    "This number is too big!": "Este número é muito grande!",
    "That's not a right number!": "Não é um número válido!",

    Key: "Chave",
    Value: "Valor",

    String: "String",
    Number: "Número",
    Boolean: "Booleano",
    Null: "Nulo",

    Remove: "Remover",
    Root: "Raíz",
    "Open URL": "Abrir URL",
    file: "arquivo",
    Create: "Criar",
  };

  return dict[value] ?? value;
}

export function toFR(value: string): string {
  const dict: Record<string, string> = {
    "Create New": "Créer Nouveau",
    "Load File": "Charger Fichier",
    "Paste Text": "Coller Texte",
    "Save As": "Enregistrer Sous",
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

    "Add From Text": "Ajouter Depuis Texte",
    "Copy Path": "Copier Chemin",

    "You can't add an item with an empty key!":
      "Vous ne pouvez pas ajouter un élément avec une clé vide !",
    "This number is too small!": "Ce nombre est trop petit !",
    "This number is too big!": "Ce nombre est trop grand !",
    "That's not a right number!": "Ce n'est pas un nombre valide !",

    Key: "Clé",
    Value: "Valeur",

    String: "String",
    Number: "Nombre",
    Boolean: "Booléen",
    Null: "Null",

    Remove: "Supprimer",
    "Open URL": "Ouvrir l'URL",
    Root: "Racine",
    file: "fichier",
    Create: "Créer",
  };

  return dict[value] ?? value;
}
export function translateTo(lang: Lang, value: string) {
  if (lang === "es") return toES(value);
  if (lang === "pt") return toPT(value);
  if (lang === "fr") return toFR(value);

  return value;
}
