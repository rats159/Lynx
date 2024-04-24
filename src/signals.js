export class Signal {
  constructor(initialValue) {
    this.value = initialValue;
    this.effects = [];
    this.alwaysEffects = [];
  }

  get() {
    return this.value;
  }

  set(value) {
    let dirty = true;
    if (this.value == value) {
      dirty = false;
    }
    this.value = value;
    if (dirty) {
      for (const effect of this.effects) {
        effect(this);
      }
    }

    for (const effect of this.alwaysEffects) {
      effect(this);
    }
  }

  addEffect(fn, always) {
    if (always) {
      this.alwaysEffects.push(fn);
    } else {
      this.effects.push(fn);
    }
  }
}
