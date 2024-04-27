<script lang="ts">
    import { auth } from "$lib/firebase";
    import { user } from "$lib/firebase";

    import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";


    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user)
    }

</script>

<h2>Conectarse</h2>

{#if $user}
  <h2 class="card-title">Bienvenid@, {$user.displayName}</h2>
  <p class="text-center text-success">Has iniciado sesión</p>
  <button class="btn btn-warning" on:click={() => signOut(auth)}>Desconectar</button>
{:else}
  <button class="btn btn-primary" on:click={signInWithGoogle}>Iniciar Sesión con Google</button>
{/if}
