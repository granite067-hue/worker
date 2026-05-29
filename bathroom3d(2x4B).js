/* ========== Global Variables ========== */
let currentTileCategory = null;

/* ========== Put your GLB filenames/URLs here (26 entries) ========== */
const modelPaths = [
  "/bathroom(2x4)1.glb", "/bathroom(2x4)2.glb", "/bathroom(2x4)24.glb",
  "/bathroom(2x4)23.glb", "/bathroom(2x4)5.glb", "/bathroom(2x4)6.glb",
  "/bathroom(2x4)7.glb", "/bathroom(2x4)8.glb", "/bathroom(2x4)9.glb",
  "/bathroom(2x4)10.glb", "/bathroom(2x4)11.glb", "/bathroom(2x4)12.glb",
  "/bathroom(2x4)21.glb", "/bathroom(2x4)22.glb", "/bathroom(2x4)15.glb",
  "/bathroom(2x4)16.glb", "/bathroom(2x4)17.glb", "/bathroom(2x4)18.glb",
  "/bathroom(2x4)13.glb", "/bathroom(2x4)14.glb", "/bathroom(2x4)19.glb",
  "/bathroom(2x4)20.glb", "/bathroom(2x4)4.glb", "/bathroom(2x4)3.glb",
  "/bathroom(2x4)25.glb", "/bathroom(2x4)26.glb"
];

/* ========== Put your design image filenames/URLs here (26 entries) ========== */
const designImages = [
  "/bathroom3d(2x4)1.png", "/bathroom3d(2x4)2.png", "/bathroom3d(2x4)3.png",
  "/bathroom3d(2x4)4.png", "/bathroom3d(2x4)5.png", "/bathroom3d(2x4)6.png",
  "/bathroom3d(2x4)7.png", "/bathroom3d(2x4)8.png", "/bathroom3d(2x4)9.png",
  "/bathroom3d(2x4)10.png", "/bathroom3d(2x4)11.png", "/bathroom3d(2x4)12.png",
  "/bathroom3d(2x4)13.png", "/bathroom3d(2x4)14.png", "/bathroom3d(2x4)15.png",
  "/bathroom3d(2x4)16.png", "/bathroom3d(2x4)17.png", "/bathroom3d(2x4)18.png",
  "/bathroom3d(2x4)19.png", "/bathroom3d(2x4)20.png", "/bathroom3d(2x4)21.png",
  "/bathroom3d(2x4)22.png", "/bathroom3d(2x4)23.png", "/bathroom3d(2x4)24.png",
  "/bathroom3d(2x4)25.png", "/bathroom3d(2x4)26.png"
];

/* Mesh name groups */
const lMeshes = ['L001', 'L002', 'L003', 'L004', 'L005', 'L006', 'L007', 'L008',
                 'L009', 'L010', 'L011', 'L012', 'L013', 'L014', 'L015', 'L016',
                 'L017', 'L018', 'L019', 'L020', 'L021', 'L022', 'L023', 'L024',
                 'L025', 'L026', 'L027', 'L028', 'L029', 'L030', 'L031', 'L032',
                 'L033', 'L034', 'L035', 'L036', 'L037', 'L038', 'L039', 'L040',
                 'L041', 'L042', 'L043', 'L044', 'L045', 'L046', 'L047', 'L048',
                 'L049', 'L050', 'L051', 'L052', 'L053', 'L054', 'L055', 'L056',
                 'L057', 'L058', 'L059', 'L060', 'L061', 'L062', 'L063', 'L064',
                 'L065', 'L066', 'L067', 'L068', 'L069', 'L070', 'L071', 'L072',
                 'L073', 'L074', 'L075', 'L076', 'L077', 'L078', 'L079', 'L080',
                 'L081', 'L082', 'L083', 'L084', 'L085', 'L086', 'L087', 'L088',
                 'L089', 'L090', 'L091', 'L092', 'L093', 'L094', 'L095', 'L096',
                 'L097', 'L098', 'L099', 'L100', 'L101', 'L102', 'L103', 'L104',
                 'L105', 'L106', 'L107', 'L108', 'L109', 'L110', 'L111', 'L112',
                 'L113', 'L114', 'L115', 'L116', 'L117', 'L118', 'L119', 'L120',
                 'L121', 'L122', 'L123', 'L124', 'L125', 'L126', 'L127', 'L128',
                 'L129', 'L130', 'L131', 'L132', 'L133', 'L134', 'L135', 'L136',
                 'L137', 'L138', 'L139', 'L140', 'L141', 'L142', 'L143', 'L144'];
const dMeshes = ['D001', 'D002', 'D003', 'D004', 'D005', 'D006', 'D007', 'D008',
                 'D009', 'D010', 'D011', 'D012', 'D013', 'D014', 'D015', 'D016',
                 'D017', 'D018', 'D019', 'D020', 'D021', 'D022', 'D023', 'D024',
                 'D025', 'D026', 'D027', 'D028', 'D029', 'D030', 'D031', 'D032',
                 'D033', 'D034', 'D035', 'D036', 'D037', 'D038', 'D039', 'D040',
                 'D041', 'D042', 'D043', 'D044', 'D045', 'D046', 'D047', 'D048',
                 'D049', 'D050', 'D051', 'D052', 'D053', 'D054', 'D055', 'D056',
                 'D057', 'D058', 'D059', 'D060', 'D061', 'D062', 'D063', 'D064',
                 'D065', 'D066', 'D067', 'D068', 'D069', 'D070', 'D071', 'D072',
                 'D073', 'D074', 'D075', 'D076', 'D077', 'D078', 'D079', 'D080',
                 'D081', 'D082', 'D083', 'D084', 'D085', 'D086', 'D087', 'D088',
                 'D089', 'D090', 'D091', 'D092', 'D093', 'D094', 'D095', 'D096',
                 'D097', 'D098', 'D099', 'D100', 'D101', 'D102', 'D103', 'D104',
                 'D105', 'D106', 'D107', 'D108', 'D109', 'D110', 'D111', 'D112',
                 'D113', 'D114', 'D115', 'D116', 'D117', 'D118', 'D119', 'D120',
                 'D121', 'D122', 'D123', 'D124', 'D125', 'D126', 'D127', 'D128',
                 'D129', 'D130', 'D131', 'D132', 'D133', 'D134', 'D135', 'D136',
                 'D137', 'D138', 'D139', 'D140', 'D141', 'D142', 'D143', 'D144'];
const hlMeshes = ['HL001', 'HL002', 'HL003', 'HL004', 'HL005', 'HL006', 'HL007', 'HL008',
                  'HL009', 'HL010', 'HL011', 'HL012', 'HL013', 'HL014', 'HL015', 'HL016',
                  'HL017', 'HL018', 'HL019', 'HL020', 'HL021', 'HL022', 'HL023', 'HL024',
                  'HL025', 'HL026', 'HL027', 'HL028', 'HL029', 'HL030', 'HL031', 'HL032',
                  'HL033', 'HL034', 'HL035', 'HL036', 'HL037', 'HL038', 'HL039', 'HL040',
                  'HL041', 'HL042', 'HL043', 'HL044', 'HL045', 'HL046', 'HL047', 'HL048',
                  'HL049', 'HL050', 'HL051', 'HL052', 'HL053', 'HL054', 'HL055', 'HL056',
                  'HL057', 'HL058', 'HL059', 'HL060', 'HL061', 'HL062', 'HL063', 'HL064',
                  'HL065', 'HL066', 'HL067', 'HL068', 'HL069', 'HL070', 'HL071', 'HL072',
                  'HL073', 'HL074', 'HL075', 'HL076', 'HL077', 'HL078', 'HL079', 'HL080',
                  'HL081', 'HL082', 'HL083', 'HL084', 'HL085', 'HL086', 'HL087', 'HL088',
                  'HL089', 'HL090', 'HL091', 'HL092', 'HL093', 'HL094', 'HL095', 'HL096',
                  'HL097', 'HL098', 'HL099', 'HL100', 'HL101', 'HL102', 'HL103', 'HL104',
                  'HL105', 'HL106', 'HL107', 'HL108', 'HL109', 'HL110', 'HL111', 'HL112',
                  'HL113', 'HL114', 'HL115', 'HL116', 'HL117', 'HL118', 'HL119', 'HL120',
                  'HL121', 'HL122', 'HL123', 'HL124', 'HL125', 'HL126', 'HL127', 'HL128'];
const fMeshes = ['F001', 'F002', 'F003', 'F004', 'F005', 'F006', 'F007', 'F008',
                 'F009', 'F010', 'F011', 'F012', 'F013', 'F014', 'F015', 'F016',
                 'F017', 'F018', 'F019', 'F020', 'F021', 'F022', 'F023', 'F024',
                 'F025', 'F026', 'F027', 'F028', 'F029', 'F030', 'F031', 'F032',
                 'F033', 'F034', 'F035', 'F036', 'F037', 'F038', 'F039', 'F040',
                 'F041', 'F042', 'F043', 'F044', 'F045', 'F046', 'F047', 'F048'];

/* ========== State & Three.js vars ========== */
let scene, camera, renderer, controls;
let gltfScene = null;
let boundingBox = null;
let modelLoadedFlag = false;
let currentDesignIndex = -1;
const textureLoader = new THREE.TextureLoader();
let uploadedTextureL = null, uploadedTextureD = null, uploadedTextureHL = null, uploadedTextureF = null;

/* Auto rotation & clock */
let autoRotate = true;
let rotationSpeed = 0.6;
const clock = new THREE.Clock();

/* Loading flag to prevent concurrent loads */
let isLoading = false;

/* Video recording flag */
let isRecording = false;

/* ========== Initialize Three.js ========== */
function initThree() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf0f0f0);

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
  camera.position.set(3, 2, 5);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.setPixelRatio(window.devicePixelRatio || 1);
  document.body.appendChild(renderer.domElement);
  renderer.domElement.style.display = 'none';

  // Lights
  scene.add(new THREE.AmbientLight(0x404040, 0.5));
  const dir = new THREE.DirectionalLight(0xffffff, 0.8); dir.position.set(1,1,1); scene.add(dir);
  const pt = new THREE.PointLight(0xffffff, 0.6); pt.position.set(0,0,2); scene.add(pt);
  const hemi = new THREE.HemisphereLight(0x87CEEB, 0x8B4513, 0.3); scene.add(hemi);

  // Environment map
  try {
    const env = new THREE.CubeTextureLoader().load([
      'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/px.jpg',
      'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/nx.jpg',
      'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/py.jpg',
      'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/ny.jpg',
      'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/pz.jpg',
      'https://threejs.org/examples/textures/cube/SwedishRoyalCastle/nz.jpg'
    ]);
    scene.environment = env;
  } catch (e) { console.warn("Env map load failed", e); scene.environment = null; }

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.07;

  // Animation loop
  (function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    if (autoRotate && gltfScene && !isRecording) {
      gltfScene.rotation.y += rotationSpeed * delta;
    }
    controls.update();
    renderer.render(scene, camera);
  })();

  // Window resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

/* ========== GLB Loader ========== */
function loadGLBByIndex(idx) {
  if (idx < 0 || idx >= modelPaths.length || isLoading) return;
  const path = modelPaths[idx];
  if (!path || path.trim() === "") {
    alert("No GLB path set for this design slot.");
    return;
  }

  isLoading = true;
  disableDesignButtons();

  if (gltfScene) {
    scene.remove(gltfScene);
    disposeObject(gltfScene);
    gltfScene = null;
  }

  const loader = new THREE.GLTFLoader();
  loader.load(path,
    (gltf) => {
      gltfScene = gltf.scene || gltf.scenes[0];
      gltfScene.position.set(3, -1, 4.5);
      gltfScene.scale.set(1,1,1);

      boundingBox = new THREE.Box3().setFromObject(gltfScene);
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);
      controls.target.copy(center);

      const size = new THREE.Vector3();
      boundingBox.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z) || 1.0;
      controls.minDistance = Math.max(0.01, maxDim * 0.05);
      controls.maxDistance = Math.max(maxDim * 0.2, 2.5);

      gltfScene.traverse((child) => {
        if (!child.isMesh) return;
        let mat = (child.material && child.material.clone) ? child.material.clone() : undefined;
        if (!mat || mat.type !== "MeshStandardMaterial") mat = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const meshName = child.name || "";
        if (fMeshes.includes(meshName)) {
          mat.roughness = 1.0;
          mat.metalness = 0.0;
          mat.envMap = null;
        } else {
          if (scene.environment) mat.envMap = scene.environment;
          mat.roughness = 0.1;
          mat.metalness = 0.0;
        }
        mat.emissive = new THREE.Color(0x000000);
        child.material = mat;
        child.material.needsUpdate = true;
      });

      applyUploadedTexturesToModel(gltfScene);

      scene.add(gltfScene);
      modelLoadedFlag = true;
      currentDesignIndex = idx;

      renderer.domElement.style.display = 'block';
      document.getElementById('designFooter').style.display = 'flex';
      document.getElementById('designFooter').setAttribute('aria-hidden', 'false');
      console.log("Loaded design", idx+1, "from", path);

      isLoading = false;
      enableDesignButtons();
    },
    (xhr) => {
      if (xhr && xhr.loaded && xhr.total) {
        const pct = Math.round((xhr.loaded / xhr.total) * 100);
        console.log(`Loading ${path}: ${pct}%`);
      }
    },
    (err) => {
      console.error("GLB load error", err);
      alert("Error loading model: " + path);
      isLoading = false;
      enableDesignButtons();
    }
  );
}

function applyUploadedTexturesToModel(root) {
  root.traverse((child) => {
    if (!child.isMesh) return;
    const name = child.name || "";
    if (lMeshes.includes(name) && uploadedTextureL) child.material.map = uploadedTextureL;
    else if (dMeshes.includes(name) && uploadedTextureD) child.material.map = uploadedTextureD;
    else if (hlMeshes.includes(name) && uploadedTextureHL) child.material.map = uploadedTextureHL;
    else if (fMeshes.includes(name) && uploadedTextureF) child.material.map = uploadedTextureF;
    child.material.needsUpdate = true;
  });
}

/* Dispose helper */
function disposeObject(obj) {
  obj.traverse((c) => {
    if (c.isMesh) {
      if (c.geometry) c.geometry.dispose();
      if (c.material) {
        if (Array.isArray(c.material)) {
          c.material.forEach(m => { if (m.map) m.map.dispose(); m.dispose(); });
        } else {
          if (c.material.map) c.material.map.dispose();
          c.material.dispose();
        }
      }
    }
  });
}

/* ========== Upload / Drag-drop / Preview / Clear ========== */
function setupUploadHandlers() {
  const items = [
    { inputId: "fileInputL", previewId: "previewL", clearId: "clearL", sectionId: "sectionL", errorId: "errorL", key: "L" },
    { inputId: "fileInputD", previewId: "previewD", clearId: "clearD", sectionId: "sectionD", errorId: "errorD", key: "D" },
    { inputId: "fileInputHL", previewId: "previewHL", clearId: "clearHL", sectionId: "sectionHL", errorId: "errorHL", key: "HL" },
    { inputId: "fileInputF", previewId: "previewF", clearId: "clearF", sectionId: "sectionF", errorId: "errorF", key: "F" }
  ];

  items.forEach(item => {
    const input = document.getElementById(item.inputId);
    const preview = document.getElementById(item.previewId);
    const clearBtn = document.getElementById(item.clearId);
    const section = document.getElementById(item.sectionId);
    const errorEl = document.getElementById(item.errorId);

    input.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      handleFile(file, preview, section, clearBtn, errorEl, item.key);
    });

    section.addEventListener('dragover', (ev) => { ev.preventDefault(); section.style.borderColor = 'var(--accent)'; });
    section.addEventListener('dragleave', (ev) => { ev.preventDefault(); if (!section.classList.contains('has-image')) section.style.borderColor = ''; });
    section.addEventListener('drop', (ev) => {
      ev.preventDefault();
      section.style.borderColor = '';
      const file = ev.dataTransfer.files && ev.dataTransfer.files[0];
      if (file) {
        const dt = new DataTransfer(); dt.items.add(file); input.files = dt.files;
        handleFile(file, preview, section, clearBtn, errorEl, item.key);
      }
    });

    clearBtn.addEventListener('click', () => {
      input.value = "";
      preview.src = "";
      preview.style.display = 'none';
      section.classList.remove('has-image');
      clearBtn.style.display = 'none';
      if (errorEl) errorEl.style.display = 'none';
      if (item.key === 'L') { uploadedTextureL = null; }
      else if (item.key === 'D') { uploadedTextureD = null; }
      else if (item.key === 'HL') { uploadedTextureHL = null; }
      else if (item.key === 'F') { uploadedTextureF = null; }
      if (gltfScene) applyUploadedTexturesToModel(gltfScene);
    });
  });
}

function handleFile(file, preview, section, clearBtn, errorEl, key) {
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    if (errorEl) {
      errorEl.textContent = "Invalid file type. Choose an image.";
      errorEl.style.display = 'block';
    }
    return;
  }
  if (file.size > 5 * 1024 * 1024) {
    if (errorEl) {
      errorEl.textContent = "File too large (max 5MB).";
      errorEl.style.display = 'block';
    }
    return;
  }
  if (errorEl) errorEl.style.display = 'none';
  const reader = new FileReader();
  reader.onload = (ev) => {
    preview.src = ev.target.result;
    preview.style.display = 'block';
    section.classList.add('has-image');
    clearBtn.style.display = 'inline-block';

    const objectUrl = URL.createObjectURL(file);
    textureLoader.load(objectUrl, (tex) => {
      tex.rotation = -Math.PI / 2;
      tex.flipY = false;
      tex.center.set(0.5, 0.5);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(1,1);

      if (key === 'L') uploadedTextureL = tex;
      else if (key === 'D') uploadedTextureD = tex;
      else if (key === 'HL') uploadedTextureHL = tex;
      else if (key === 'F') uploadedTextureF = tex;

      if (gltfScene) applyUploadedTexturesToModel(gltfScene);

      setTimeout(() => URL.revokeObjectURL(objectUrl), 2000);
    });
  };
  reader.readAsDataURL(file);
}

/* ========== Wire UI Buttons ========== */
function wireUI() {
  document.getElementById('generateBtn').addEventListener('click', () => {
    renderer.domElement.style.display = 'block';
    document.getElementById('designFooter').style.display = 'flex';
    document.getElementById('designFooter').setAttribute('aria-hidden','false');
    
    // Show Go to Top button when model is generated
    document.getElementById('goToTopBtn').classList.add('show');
    
    const idx = modelPaths.findIndex(p => p && p.trim() !== "");
    if (idx >= 0) loadGLBByIndex(idx);
    else alert("No GLB files provided in modelPaths. Edit the modelPaths array in the JS.");
  });

  // Fullscreen button
  document.getElementById('fullscreenBtn').addEventListener('click', async () => {
    const el = renderer.domElement;
    if (!document.fullscreenElement) {
      try {
        await el.requestFullscreen();
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      } catch (e) { console.warn("Fullscreen failed:", e); }
    } else {
      try {
        await document.exitFullscreen();
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      } catch (e) { console.warn("Exit fullscreen failed:", e); }
    }
  });

  // Download button with smooth camera movement
  document.getElementById("downloadBtn").addEventListener("click", async () => {
    if (isRecording) {
      alert("Recording already in progress!");
      return;
    }
    
    if (!modelLoadedFlag) {
      alert("Please generate a model first!");
      return;
    }
    
    try {
      isRecording = true;
      
      // Store original auto-rotate state
      const originalAutoRotate = autoRotate;
      autoRotate = false;
      
      // Store original camera position
      const originalCameraPosition = camera.position.clone();
      const originalTarget = controls.target.clone();
      
      // Start video stream capture with 60fps for smoother video
      const videoStream = renderer.domElement.captureStream(60);
      
      // Setup audio
      const audio = new Audio("/background.mp3");
      audio.crossOrigin = "anonymous";
      audio.loop = true;
      
      // Create audio context for better audio handling
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const audioSource = audioContext.createMediaElementSource(audio);
      const audioDestination = audioContext.createMediaStreamDestination();
      audioSource.connect(audioDestination);
      audioSource.connect(audioContext.destination);
      
      // Combine video and audio tracks
      const combinedStream = new MediaStream([
        ...videoStream.getVideoTracks(),
        ...audioDestination.stream.getAudioTracks()
      ]);
      
      const chunks = [];
      const recorder = new MediaRecorder(combinedStream, { 
        mimeType: "video/webm;codecs=vp9",
        videoBitsPerSecond: 8000000 // 8 Mbps for better quality
      });
      
      recorder.ondataavailable = (e) => { 
        if (e.data.size > 0) chunks.push(e.data); 
      };
      
      recorder.onstop = () => {
        // Restore original state
        autoRotate = originalAutoRotate;
        camera.position.copy(originalCameraPosition);
        controls.target.copy(originalTarget);
        
        audio.pause();
        audio.currentTime = 0;
        audioContext.close();
        
        const blob = new Blob(chunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `bathroom_design_${currentDesignIndex + 1 || 1}.webm`;
        a.click();
        URL.revokeObjectURL(url);
        
        isRecording = false;
        console.log("Recording completed successfully");
      };
      
      // Start recording and audio
      await audioContext.resume();
      await audio.play();
      recorder.start();
      
      // Smooth camera animation sequence
      const startPos = camera.position.clone();
      const startTarget = controls.target.clone();
      
      // Animation sequence:
      // 1. Move camera right while rotating
      // 2. Move camera up
      // 3. Move camera left
      // 4. Move camera down (return to start height)
      const animationDuration = 10000; // 10 seconds total
      const startTime = Date.now();
      
      function animateCamera() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        
        // Smooth easing function
        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const easedProgress = easeInOutCubic(progress);
        
        if (gltfScene) {
          // Rotate the model continuously during recording
          gltfScene.rotation.y += 0.01;
        }
        
        // Camera movement sequence
        // Phase 1: Move right (0-25%)
        // Phase 2: Move up (25-50%)
        // Phase 3: Move left (50-75%)
        // Phase 4: Move down back to original (75-100%)
        
        let currentPos = startPos.clone();
        let currentTarget = startTarget.clone();
        
        if (progress < 0.25) {
          // Move right
          const phaseProgress = progress / 0.25;
          currentPos.x = startPos.x + (2 * phaseProgress);
          currentPos.z = startPos.z - (1 * phaseProgress);
        } else if (progress < 0.5) {
          // Move up
          const phaseProgress = (progress - 0.25) / 0.25;
          currentPos.y = startPos.y + (1.5 * phaseProgress);
        } else if (progress < 0.75) {
          // Move left
          const phaseProgress = (progress - 0.5) / 0.25;
          currentPos.x = (startPos.x + 2) - (4 * phaseProgress);
          currentPos.z = (startPos.z - 1) + (2 * phaseProgress);
        } else {
          // Move down back to original
          const phaseProgress = (progress - 0.75) / 0.25;
          currentPos.y = (startPos.y + 1.5) - (1.5 * phaseProgress);
        }
        
        camera.position.copy(currentPos);
        camera.lookAt(currentTarget);
        controls.update();
        
        if (progress < 1) {
          requestAnimationFrame(animateCamera);
        }
      }
      
      // Start camera animation
      animateCamera();
      
      alert("Recording for 10 seconds with smooth camera movement...");
      
      // Stop recording after 10 seconds
      await new Promise(res => setTimeout(res, 10000));
      recorder.stop();
      
    } catch (e) {
      console.error("Recording failed:", e);
      isRecording = false;
      alert("Recording failed: " + e.message);
    }
  });

  // Rotation toggle & speed
  document.getElementById('autoRotateToggle').addEventListener('change', (e) => {
    autoRotate = e.target.checked;
  });
  document.getElementById('rotationSpeed').addEventListener('input', (e) => {
    rotationSpeed = parseFloat(e.target.value) || 0.0;
  });
  
  // Go to Top button
  document.getElementById('goToTopBtn').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Show/hide Go to Top button based on scroll position
  window.addEventListener('scroll', () => {
    const goToTopBtn = document.getElementById('goToTopBtn');
    if (window.scrollY > 300) {
      goToTopBtn.classList.add('show');
    } else {
      goToTopBtn.classList.remove('show');
    }
  });
}

/* ========== Create footer buttons (26) ========== */
function createFooterButtons() {
  const footer = document.getElementById('designFooter');
  footer.innerHTML = "";

  let activeBtn = null;

  for (let i = 0; i < 26; i++) {
    const box = document.createElement('div');
    box.className = 'design-box';
    box.id = `designBox${i + 1}`;

    const img = document.createElement('img');
    img.src = designImages[i] || `https://via.placeholder.com/40x30?text=D${i + 1}`;
    img.alt = `Design ${i + 1}`;
    box.appendChild(img);

    const span = document.createElement('span');
    span.textContent = `Design ${i + 1}`;
    box.appendChild(span);

    if (!modelPaths[i] || modelPaths[i].trim() === "") box.style.opacity = 0.5;

    box.addEventListener('click', () => {
      if (!modelPaths[i] || modelPaths[i].trim() === "") {
        alert("No GLB set for this design slot.");
        return;
      }

      loadGLBByIndex(i);

      if (activeBtn) activeBtn.classList.remove('active');
      box.classList.add('active');
      activeBtn = box;
    });

    footer.appendChild(box);
  }

  document.addEventListener("fullscreenchange", () => {
    const footer = document.getElementById("designFooter");
    if (document.fullscreenElement) {
      footer.style.position = "fixed";
      footer.style.bottom = "10px";
      footer.style.left = "0";
      footer.style.right = "0";
      footer.style.zIndex = "999999";
      footer.style.display = "flex";
      footer.style.pointerEvents = "auto";
    } else {
      footer.style.display = "flex";
    }
  });
}

/* ========== Functions to disable/enable design buttons during loading ========== */
function disableDesignButtons() {
  for (let i = 1; i <= 26; i++) {
    const box = document.getElementById(`designBox${i}`);
    if (box) box.style.pointerEvents = 'none';
  }
}

function enableDesignButtons() {
  for (let i = 1; i <= 26; i++) {
    const box = document.getElementById(`designBox${i}`);
    if (box && modelPaths[i-1] && modelPaths[i-1].trim() !== "") box.style.pointerEvents = 'auto';
  }
}

/* ========== Startup ========== */
(function startup() {
  initThree();
  setupUploadHandlers();
  wireUI();
  createFooterButtons();
})();