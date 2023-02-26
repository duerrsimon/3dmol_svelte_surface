// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export { default as reset } from "./reset.css";
export { default as global } from "./global.css";
export { default as theme } from "./theme.css";
export { default as css } from "./pollen.css";
export { default as typography } from "./typography.css";

export * from "./colors";

export { };
