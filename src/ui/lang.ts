export function toES(value: string): string {
  const dict: Record<string, string> = {
    "Create New": "Crear Nuevo",
    "Load File": "Cargar Archivo",
    "Paste Text": "Pegar Texto",
    Download: "Descargar",
    Settings: "Opciones",
    Clear: "Limpiar",
    Options: "Opciones",
    "Edit Array": "Editar Array",
    "Edit Object": "Editar Objecto",
    "Add Object": "Añadir Objecto",
    "Add Value": "Añadir Valor",
    "Add From Text": "Añadir Desde Texto",
    "Copy Path": "Copiar Path",
    "Remove": "Remover",
    "Add Array": "Añadir Array",
    "Add String": "Añadir String",
    "Add Number": "Añadir Numbero",
  };

  return dict[value] ?? value;
}
