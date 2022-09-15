export abstract class ReplaceTemplate {
  protected primitiveText: string = '';
  protected replacingMaps: Map<string, string> = new Map();

  constructor() {}

  /**
   * Template method should be public for access by the client
   * @returns Replaced text
   */
  public templateMethod(primitive: string, maps: Map<string, string>): void {
    this.setPrimitiveStep(primitive);
    this.setReplacingMapStep(maps);
    const result = this.calculateReplaceHook(); // cruciual hook step
   this.extractAsFile(result);
  }

  /**
   * Set main text
   * @param aggrement Main text for replacing
   */
  protected setPrimitiveStep(primitive: string): void {
    if (primitive.length === 0) throw new Error("Main text can't be empty");
    this.primitiveText = primitive;
  }

  /**
   * Set replacing map
   * @param maps Changing map for replacing
   */
  protected setReplacingMapStep(maps: Map<string, string>) {
    if (maps.size == 0) throw new Error("Replacing map can't be empty");
    this.replacingMaps = maps;
  }

  /**
   * Can be privaret to prevent overrite
   */
  private calculateReplaceHook(): string {
    let result = this.primitiveText;
    this.replacingMaps.forEach(
      (value, key) => (result = result.replace(key, value))
    );
    return result;
  }

  /**
   * Extract as file but must be implemented by the client
   * @param text Replaced text
   */
  protected abstract extractAsFile(text: string): void;

  /**
   * You can remove this get method, I just created this method for showing you the replaced text
   */
  public get replacedText(): string {
    return this.calculateReplaceHook();
  }
}
