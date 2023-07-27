declare module '*.module.scss' {
  const classes: { [key: string]: string };

  export default classes;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };

  export default classes;
}

declare module '*.svg' {
  const content: React.FC<React.SVGAttributes<SVGElement>>;

  export default content;
}
