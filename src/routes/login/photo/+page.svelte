<script lang="ts">
    import AuthCheck from "$lib/components/AuthCheck.svelte";
    import { user, userData, storage, db } from "$lib/firebase";
    import { doc, updateDoc } from "firebase/firestore";
    import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
  
    let previewURL: string;
    let uploading = false;
    $: href = `/${$userData?.username}/edit`;
  
    async function upload(e: any) {
      uploading = true;
      const file = e.target.files[0];
      previewURL = URL.createObjectURL(file);
      const storageRef = ref(storage, `users/${$user!.uid}/profile.png`);
      const result = await uploadBytes(storageRef, file);
      const url = await getDownloadURL(result.ref);
  
      await updateDoc(doc(db, "users", $user!.uid), { photoURL: url });
      uploading = false;
    }
  </script>
  
  <AuthCheck>
    <h2 class="card-title">Actualiza la imagen de tu perfil</h2>
  
    <form class="max-w-screen-md w-full">
      <div class="form-control w-full max-w-xs my-10 mx-auto text-center">
        <img
          src={previewURL ?? $userData?.photoURL ?? "/user.png"}
          alt="photoURL"
          width="256"
          height="256"
          class="mx-auto"
        />
        <label for="photoURL" class="label">
          <span class="label-text">Elige una imagen</span>
        </label>
        <input
          on:change={upload}
          name="photoURL"
          type="file"
          class="file-input file-input-bordered w-full max-w-xs"
          accept="image/png, image/jpeg, image/gif, image/webp"
        />
        {#if uploading}
          <p>Subiendo...</p>
          <progress class="progress progress-info w-56 mt-6" />
        {/if}
      </div>
    </form>
  
    <a {href} class="btn btn-primary bg-accent"> Terminado </a>
  </AuthCheck>

  <style>
    a:hover {
        background-color: oklch(0.89 0.19 164.75);
    }
  </style>