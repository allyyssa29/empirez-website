document.querySelectorAll('a[href^="#"]').forEach(a =>
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;

    const el = document.querySelector(id);

    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth' });
    }
  })
);


// =====================================================
// SERVER TIPS
// =====================================================

const tipData = {

  getting: {
    title: "Getting Started",
    html: `
      <h4>Server Info</h4>

      <p>
        <b>EmpireZ : Star Wars : PVE</b><br>
        IP Address: 64.20.63.70:2502
      </p>

      <p>
        <b>EmpireZ : Star Wars : PVP Raid</b><br>
        IP Address: 64.20.63.70:2302
      </p>

      <h4>Update Mods</h4>

      <ul>
        <li>See announcements for what mods updated.</li>
        <li>Type in the mod name.</li>
        <li>Click the down arrow, then the 3 dots for that mod.</li>
        <li>Click repair.</li>
      </ul>

      <h4>Commands</h4>

      <p>
        <b>!tips</b> — Links to all server tips categories<br>
        <b>!clip</b> — Link to clipping software
      </p>

      <h4>Other Tips</h4>

      <ul>
        <li>Use a wrench to flip your speeder.</li>
        <li>Auto-Run feature available.</li>
        <li>No PvP in the PVE area — DMG OFF.</li>
        <li>No building in military areas or POIs.</li>
        <li>A buried stash lasts 14 days.</li>
        <li>Press M in game and use the info tab for more details.</li>
        <li>Storage/Tents/Walls/Crates last 7 days without a flag.</li>
      </ul>

      <p class="tip-note">
        Lost items: Admins cannot compensate lost items without proof.
        Take video clips.
      </p>
    `
  },


  factions: {
    title: "Factions & Territories",
    html: `
      <ul>
        <li>A flag kit must be placed and fully built within 7 days.</li>
        <li>Flags cover a 60m radius.</li>
        <li>1 flag per group.</li>
        <li>Maximum group size: 15 players.</li>
        <li>Sub groups are enabled.</li>
        <li>Bases may only be taken over after the flag has fully despawned.</li>
        <li>All door locks must also be despawned.</li>
        <li>If unsure whether a base is clear, ask an admin before acting.</li>
        <li>Flags automatically assign to your group when built.</li>
        <li>Storage/Tents/Walls/Crates last 7 days without a flag.</li>
        <li>A buried stash lasts 14 days.</li>
      </ul>
    `
  },


  traders: {
    title: "Traders",
    html: `
      <h4>Full Trader</h4>

      <ul>
        <li>Both EmpireZ servers feature a fully stocked trader.</li>
        <li>Buy and sell gear, weapons, building supplies, vehicles, and other survival essentials.</li>
      </ul>

      <h4>Important Notes</h4>

      <ul>
        <li>Do not leave ships at trader when logging off.</li>
        <li>Use one of the 3 garages at trader for proper ship storage.</li>
      </ul>
    `
  },


  events: {
    title: "World Events",
    html: `
      <ul>

        <li>
          <b>Jawa Crate — Tier 4:</b>
          Notification plays and a map marker appears.
        </li>

        <li>
          <b>Krennic & Mando Ships:</b>
          Random map spawns; more frequent in PvP zones; no announcement.
        </li>

        <li>
          <b>TIE Fighter Wrecks:</b>
          Any tier; increased frequency in PvP zones.
        </li>

        <li>
          <b>Mando Safes:</b>
          Tier 3–4 military.
        </li>

        <li>
          <b>Loot Droids (Black):</b>
          Tier 3–4 military.
        </li>

        <li>
          <b>Loot Droids (Color):</b>
          Any military tier.
        </li>

      </ul>
    `
  },


  force: {
    title: "Force Powers",
    html: `
      <p>
        <i>Must be purchased in this order.</i>
      </p>

      <ul>
        <li>Force Push — 10 Sith + 10 Jedi Medallions (F1)</li>
        <li>Force Heal — 25 Sith + 25 Jedi Medallions (F3)</li>
        <li>Force Shield — 35 Sith + 35 Jedi Medallions (F4)</li>
        <li>Force Invisibility — 65 Sith + 65 Jedi Medallions (F10)</li>
        <li>Force Jump — 75 Sith + 75 Jedi Medallions (F8)</li>
        <li>Force Speed — 100 Sith + 100 Jedi Medallions (F7)</li>
      </ul>

      <p>
        Collect medallions, give them to the droid, and keep the receipt.
        Force powers apply after a restart.
      </p>

      <p>
        A “True Sith” or “True Jedi” chat tag is added after all Force
        powers are acquired. Open a ticket with proof of the last power.
      </p>
    `
  },


  loot: {
    title: "Loot Tiers",
    html: `
      <h4>Tier 1–3</h4>

      <p>
        Armor: Rebels, Clones, Stormtroopers, Bounty Hunters, Mandos,
        Smugglers, Tusken Raiders.<br>
        Weapons: x1–x2.
      </p>

      <h4>Tier 3–4</h4>

      <p>
        Weapons x3, Loot Droids, Mando Safes.
      </p>

      <h4>Tier 4 — PvP Zones</h4>

      <p>
        Rare armor variants, ammo x4, NBC filters/clothing,
        DC-15a + mags, E-5 + mags, DLT mags, 30-round mags,
        AKM, Commando backpacks, suppressors & ACOGs,
        M79/ASVAL, Mando crates, Loot Droids, extra TIE wrecks,
        Jawa crate loot, gold/chrome Mando parts,
        exclusive Level 2 clothing sets.
      </p>

      <h4>Imperial Base</h4>

      <p>
        Weapons x4, ammo x4, Kyber Crystals, Empty Datacards,
        Star Maps, Bunker Charges, Clone Commanders.
      </p>

      <h4>Crash & Ship Loot</h4>

      <p>
        TIE Fighter Wrecks can contain everything from water bottles
        to artifacts, weapons and valuables.

        Krennic Ship & Razorcrest can contain Empty Chain Code or Datapad.
      </p>
    `
  },


  storage: {
    title: "Storage & Crafting",
    html: `
      <p>
        All custom storage containers hold <b>1,000 slots</b>.
        Exception: Wood Crate uses vanilla storage.
    </p>

    <h4>Crafting Recipes</h4>

    <ul>
      <li>Han Storage — Han Carbonite + Hammer</li>
      <li>Wood Crate — Planks + Nails</li>
      <li>Locker — 10× Sheet Metal + 70× Nails</li>
      <li>Gun Wall — 6× Sheet Metal + 70× Nails</li>
      <li>Gear Stand — 1× Log + 70× Nails</li>
      <li>All Other Storage — 2× Sheet Metal + Box of Nails</li>
    </ul>

    <img
      src="storagecrafting.jpg"
      alt="EmpireZ Storage Crafting Guide"
      class="artifact-guide"
    >
  `
},


  artifact: {
    title: "Artifact Crafting",
    html: `
      <h4>Grey Order Saber</h4>

      <ul>
        <li>
          Yellow Kyber Crystal + Sword → Grey Order Lightsaber
        </li>

        <li>
          Grey Order Lightsaber + Yellow Kyber Crystal →
          Overkill Grey Order Lightsaber
        </li>
      </ul>

      <h4>Swords</h4>

      <ul>
        <li>
          Black Kyber Crystal + Sword → Sith Warblade
        </li>

        <li>
          Crimson Kyber Crystal + Crimson Nightsister Sword
        </li>

        <li>
          Purple Kyber Crystal + Sword → Jedi Force Blade
        </li>
      </ul>

      <h4>Nightsister</h4>

      <p>
        Nightsister Force Crystal + Mime Mask → Darth Maul Mask
      </p>

      <h4>Vibroblades</h4>

      <p>
        Pink Kyber Crystal + Machete → Vibroblade<br>
        Orange Kyber Crystal + Machete → Vibroblade
      </p>

      <img
        src="artifactcrafting.jpg"
        alt="EmpireZ Artifact Crafting Guide"
        class="artifact-guide"
    >
    `
  },


  ships: {
    title: "Ships & Speeders",
    html: `
      <h4>Speeders</h4>

      <p>
        Mini Speeder Bike •
        Endor Speeder Bike •
        Endor Speeder Bike (Red/Green/Blue) •
        Hover Bike •
        Bloodfin Speeder •
        Rey's Speeder •
        Solo StarWars Speeder (2 seater)
      </p>

      <h4>Fighters & Small Ships</h4>

      <p>
        TIE Fighter •
        TIE Interceptor •
        TIE Silencer •
        Royal TIE Fighter •
        Snow Speeder •
        Recon Speeder •
        Trident Fighter •
        X-Wing T-70 (OG/Teal/Red) •
        Partisan X-Wing •
        Black One •
        The Pink One •
        Scimitar •
        Soulless
      </p>

      <h4>Transports</h4>

      <p>
        FreckTransport • Imperial Shuttle
      </p>

      <h4>LAAT Dropships</h4>

      <p>
        LAAT Dropship Blue •
        Green •
        Black N White Partisan •
        Shock Battalion •
        187th Infantry Battalion •
        Desert Camo
      </p>
    `
  },


  quests: {
    title: "Quests",
    html: `
      <ul>

        <li>Imperial Keycard → Opens Imperial Bunker</li>

        <li>
          Ion Charge → Opens Hoth Bunker + Mando Bunker
        </li>

        <li>
          Starmap (Red/Blue/Green) + Empty Data Card →
          Unlock Loot Droids
        </li>

        <li>
          Chain Codes + Datapad → Unlock Mando Safes
        </li>

        <li>
          Blue Kyber + Blue Kyber →
          Jedi Holocron → Jedi Hideout
        </li>

        <li>
          Red Kyber + Red Kyber →
          Sith Holocron → Sith Temple
        </li>

        <li>
          Green Kyber + Green Kyber →
          Nihilus Holocron → Mustafar Temple
        </li>

      </ul>
    `
  }

};


// =====================================================
// SERVER TIPS CLICKABLE CARDS
// =====================================================

const tipPanel = document.getElementById("tip-panel");

if (tipPanel) {

  document.querySelectorAll("#tips .tip-card").forEach(btn => {

    btn.addEventListener("click", () => {

      const d = tipData[btn.dataset.tip];

      if (!d) return;

      document.querySelectorAll("#tips .tip-card").forEach(b =>
        b.classList.remove("active")
      );

      btn.classList.add("active");

      document.getElementById("tip-title").textContent = d.title;
      document.getElementById("tip-content").innerHTML = d.html;

      tipPanel.hidden = false;

      tipPanel.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });

    });

  });


  const tipClose =
    document.querySelector("#tip-panel .tip-close");

  if (tipClose) {

    tipClose.addEventListener("click", () => {

      tipPanel.hidden = true;

      document.querySelectorAll("#tips .tip-card").forEach(b =>
        b.classList.remove("active")
      );

    });

  }

}


// =====================================================
// HC OUTPOST
// =====================================================

const outpostData = {

  bases: {
    title: "Custom Bases",
  html: `
    <h4>How to Purchase</h4>

    <p>
      To purchase a custom base, please make a ticket and we will come
      place it for you.
    </p>

    <p>
      If you decide to return a purchased custom base, you'll receive
      <b>50% of the original price back.</b>
    </p>

    <p>
      <b>One custom base per member in a group.</b>
    </p>

    <a
      class="button"
      href="https://discord.com/channels/1171005376196517918/1351331443363811418"
      target="_blank"
      rel="noopener noreferrer"
    >
      VIEW CUSTOM BASES
    </a>
  `
},


  store: {
    title: "Admin Store",
    html: `

      <h4>How to Make a Purchase</h4>

      <p>
        Open a ticket and tell us what you'd like to buy.
        Feel free to ask any questions!
      </p>

      <p>
        <i>
          If you see a static ship on the map you'd like to purchase,
          just ask — we have many more that aren't currently on display.
        </i>
      </p>

      <p>
        Have a suggestion for a new item? Let us know!
      </p>

      <p class="tip-note">
        ⚠️ Griefing or dismantling the shop = IMMEDIATE BAN<br>
        ⚠️ All items are non-refundable.
      </p>

      <h4>Admin Shop Price List</h4>

      <p>
        <i>
          All prices are listed in Trade Federation Coins (TF Coins).
        </i>
      </p>

      <h4>Ships</h4>

      <ul>
        <li>
          <b>All Static Ships</b> — 800 TF Coins
        </li>
      </ul>

      <h4>Posters & Custom Items</h4>

      <ul>

        <li>
          <b>Posters</b> — 25 TF Coins
        </li>

        <li>
          <b>Large Posters</b> — 50 TF Coins
        </li>

        <li>
          <b>Custom Poster</b> — 300 TF Coins
          <br>
          Star Wars-related artwork or a sign. No profanity.
          <br><br>
          <small>
            1024×512 — Rectangle Frame
          </small>
          <br>
          <small>
            512×512 or 1024×1024 — Square Frame
          </small>
        </li>

        <li>
          <b>Custom Flag</b> — 300 TF Coins
        </li>

      </ul>

      <h4>Decorations & Statics</h4>

      <ul>

        <li>
          <b>Buff Yoda</b> — 300 TF Coins
        </li>

        <li>
          <b>Holo Table</b> — 150 TF Coins
        </li>

        <li>
          <b>Floating Rock</b> — 150 TF Coins
        </li>

        <li>
          <b>Landing Pad (Gray)</b> — 500 TF Coins
        </li>

        <li>
          <b>Carbonite</b> — 100 TF Coins
        </li>

        <li>
          <b>Helmet Stakes</b> — 50 TF Coins
        </li>

        <li>
          <b>Static Droids</b> — 100 TF Coins
        </li>

        <li>
          <b>Mythosaur Skull</b> — 75 TF Coins
        </li>

        <li>
          <b>Jabba's Palace Skull</b> — 75 TF Coins
        </li>

        <li>
          <b>Banners</b> — 50 TF Coins
        </li>

        <li>
          <b>Jedi Statue</b> — 100 TF Coins
        </li>

        <li>
          <b>Static Jawa</b> — 50 TF Coins
        </li>

        <li>
          <b>Static Darth Grogu</b> — 100 TF Coins
        </li>

        <li>
          <b>Felusia Flowers</b> — 75 TF Coins
        </li>

        <li>
          <b>Dragon Skeleton</b> — 150 TF Coins
        </li>

        <li>
          <b>Control Screens</b> — 50 TF Coins
        </li>

      </ul>

    `
  }

};


// =====================================================
// HC OUTPOST CLICKABLE CARDS
// =====================================================

const outpostPanel =
  document.getElementById("outpost-panel");

if (outpostPanel) {

  document.querySelectorAll("#outpost .outpost-card").forEach(btn => {

    btn.addEventListener("click", () => {

      const d = outpostData[btn.dataset.outpost];

      if (!d) return;

      document.querySelectorAll("#outpost .outpost-card").forEach(b =>
        b.classList.remove("active")
      );

      btn.classList.add("active");

      document.getElementById("outpost-title").textContent =
        d.title;

      document.getElementById("outpost-content").innerHTML =
        d.html;

      outpostPanel.hidden = false;

      outpostPanel.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });

    });

  });


  const outpostClose =
    document.querySelector("#outpost-panel .outpost-close");

  if (outpostClose) {

    outpostClose.addEventListener("click", () => {

      outpostPanel.hidden = true;

      document.querySelectorAll("#outpost .outpost-card").forEach(b =>
        b.classList.remove("active")
      );

    });

  }

}


// =====================================================
// MEDIA GALLERY LIGHTBOX
// =====================================================

const mediaLightbox =
  document.getElementById("media-lightbox");

const mediaLightboxImage =
  document.getElementById("media-lightbox-image");

const mediaLightboxTitle =
  document.getElementById("media-lightbox-title");

const mediaLightboxClose =
  document.querySelector(".media-lightbox-close");


if (mediaLightbox && mediaLightboxImage) {

  document.querySelectorAll(".media-item").forEach(item => {

    item.addEventListener("click", () => {

      mediaLightboxImage.src =
        item.dataset.full;

      mediaLightboxImage.alt =
        item.dataset.title || "EmpireZ media";

      if (mediaLightboxTitle) {

        mediaLightboxTitle.textContent =
          item.dataset.title || "";

      }

      mediaLightbox.hidden = false;

      document.body.style.overflow =
        "hidden";

    });

  });


  const closeMediaLightbox = () => {

    mediaLightbox.hidden = true;

    mediaLightboxImage.src = "";

    document.body.style.overflow = "";

  };


  if (mediaLightboxClose) {

    mediaLightboxClose.addEventListener(
      "click",
      closeMediaLightbox
    );

  }


  mediaLightbox.addEventListener("click", e => {

    if (e.target === mediaLightbox) {

      closeMediaLightbox();

    }

  });


  document.addEventListener("keydown", e => {

    if (
      e.key === "Escape" &&
      !mediaLightbox.hidden
    ) {

      closeMediaLightbox();

    }

  });

}


// =====================================================
// GEAR GUIDE
// =====================================================

const gearData = {

  tier1: {
    title: "",
    html: `
      <div class="gear-image-list">
        <img src="tier1armor.jpg" alt="Tier 1 Armor">
        <img src="tier1armortwo.jpg" alt="Tier 1 Armor">
        <img src="tier1armorthree.jpg" alt="Tier 1 Armor">
      </div>
    `
  },

  tier2: {
    title: "",
    html: `
      <div class="gear-image-list">
        <img src="tier2armor.jpg" alt="Tier 2 Armor">
        <img src="tier2armortwo.jpg" alt="Tier 2 Armor">
        <img src="tier2armorthree.jpg" alt="Tier 2 Armor">
        <img src="tier2armorfour.jpg" alt="Tier 2 Armor">
        <img src="tier2armorfive.jpg" alt="Tier 2 Armor">
        <img src="tier2armorsix.jpg" alt="Tier 2 Armor">
        <img src="tier2armorseven.jpg" alt="Tier 2 Armor">
        <img src="tier2armoreight.jpg" alt="Tier 2 Armor">
        <img src="tier2armornine.jpg" alt="Tier 2 Armor">
        <img src="tier2armorten.jpg" alt="Tier 2 Armor">
        <img src="tier2armoreleven.jpg" alt="Tier 2 Armor">
        <img src="tier2armortwelve.jpg" alt="Tier 2 Armor">
        <img src="tier2armorthirteen.jpg" alt="Tier 2 Armor">
      </div>
    `
  },

  tier3: {
    title: "",
    html: `
      <div class="gear-image-list">
        <img src="tier3armor.jpg" alt="Tier 3 Armor">
        <img src="tier3armor2.jpg" alt="Tier 3 Armor">
        <img src="tier3armor3.jpg" alt="Tier 3 Armor">
      </div>
    `
  },

  achievement: {
    title: "",
    html: `
      <div class="gear-image-list">
        <img src="achievementarmor.jpg" alt="Achievement Armor">
      </div>
    `
  },

  nbc: {
    title: "",
    html: `
      <div class="gear-image-list">
        <img src="nbcgear.jpg" alt="NBC Gear">
      </div>
    `
  }

};


// =====================================================
// GEAR GUIDE CLICKABLE CARDS
// =====================================================

const gearPanel =
  document.getElementById("gear-panel");

if (gearPanel) {

  document.querySelectorAll("#gear .gear-card").forEach(btn => {

    btn.addEventListener("click", () => {

      const d =
        gearData[btn.dataset.gear];

      if (!d) return;

      document.querySelectorAll("#gear .gear-card").forEach(b =>
        b.classList.remove("active")
      );

      btn.classList.add("active");

      document.getElementById("gear-title").textContent =
        d.title;

      document.getElementById("gear-content").innerHTML =
        d.html;

      gearPanel.hidden = false;

      gearPanel.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });

    });

  });


  const gearClose =
    document.querySelector("#gear-panel .gear-close");

  if (gearClose) {

    gearClose.addEventListener("click", () => {

      gearPanel.hidden = true;

      document.querySelectorAll("#gear .gear-card").forEach(b =>
        b.classList.remove("active")
      );

    });

  }

}


// =====================================================
// COLLECTIBLES
// =====================================================

const collectibleData = {

  legos: {
  title: "LEGO Collection",
  html: `
    <div class="collectible-list">
      <ul>
        <li>Amidala Lego</li>
        <li>B1 Droid Lego</li>
        <li>Boba Fett Lego</li>
        <li>Chewy Lego</li>
        <li>Cracked Helmet Kylo Lego</li>
        <li>Darth Grogu Lego</li>
        <li>Greedo Lego</li>
        <li>Jango Fett Lego</li>
        <li>Jedi Guard Lego</li>
        <li>Ahsoka Lego</li>
        <li>Anakin Lego</li>
        <li>Burnt Anakin Lego</li>
        <li>C3PO Lego</li>
        <li>Clonetrooper Lego</li>
        <li>Com Cody Lego</li>
        <li>Kylo Ren Lego</li>
        <li>Luke Lego</li>
        <li>Darth Maul Lego</li>
        <li>Obiwan Lego</li>
        <li>R2D2 Lego</li>
        <li>Rey Lego</li>
        <li>Vader Lego</li>
        <li>Yoda Lego</li>
        <li>Blue Milk Luke Lego</li>
        <li>Nihulus Lego</li>
        <li>Pretorian Guard Lego</li>
        <li>Red Mando Lego</li>
        <li>Sabine Lego</li>
        <li>Silver3po Lego</li>
        <li>Skull Mando Lego</li>
        <li>Spider Maul Lego</li>
        <li>Starkiller Lego</li>
        <li>SwimTrooper Lego</li>
        <li>Gold Xwing Lego</li>
        <li>Chrome Xwing Lego</li>
        <li>Jawa Lego</li>
      </ul>
    </div>
  `
},


  cards: {
    title: "Trading Cards",
    html: `
      <p class="tip-note">
        Trading card information coming soon.
      </p>
    `
  },


  sabers: {
  title: "Saber Collection",
  html: `
    <div class="saber-collection">

      <h4>Lightsabers</h4>
      <p class="saber-note">
        Collect both the <b>Overkill</b> and <b>Non-Overkill</b> versions unless otherwise noted.
      </p>

      <ul class="saber-list">
        <li>Ahsoka Tano Lightsaber</li>
        <li>Anakin Lightsaber</li>
        <li>Cannibal Lightsaber</li>
        <li>Count Dooku Lightsaber</li>
        <li>Darksaber <span>(Normal Version Only)</span></li>
        <li>Darth Grogu Lightsaber</li>
        <li>Ezra Lightsaber</li>
        <li>Grey Order Lightsaber</li>
        <li>Harlon Lightsaber</li>
        <li>Inquisitor Lightsaber</li>
        <li>Kylo Lightsaber</li>
        <li>Luke Skywalker Lightsaber</li>
        <li>Mace Windu Lightsaber</li>
        <li>Malgus Lightsaber</li>
        <li>Maul Lightsaber</li>
        <li>Nihilus Lightsaber</li>
        <li>Obi-Wan Lightsaber</li>
        <li>Palpatine Lightsaber</li>
        <li>Plo Kloons Lightsaber</li>
        <li>Poison Lightsaber</li>
        <li>Revan Blue Lightsaber</li>
        <li>Rey Skywalker Lightsaber</li>
        <li>Sith Lightsaber</li>
        <li>Starkiller Lightsaber</li>
        <li>Talon Lightsaber</li>
        <li>Vader Lightsaber</li>
        <li>Yoda Lightsaber</li>
        <li>Bane Lightsaber</li>
        <li>Ventress Lightsaber</li>
      </ul>


      <h4>Achievement Sabers</h4>

      <ul class="saber-list achievement-sabers">
        <li>Holloween Lightsaber</li>
        <li>Leia Lightsaber</li>
        <li>Luke Guard Lightsaber</li>
        <li>Revan Purple Lightsaber</li>
        <li>Pink Lightsaber</li>
        <li>Revan Red Lightsaber</li>
        <li>Darksaber <span>(Overkill Version Only)</span></li>
        <li>StellanGios Lightsaber</li>
        <li>Sarin Lightsaber</li>
      </ul>


      <h4>Admin Sabers</h4>

      <ul class="saber-list admin-sabers">
        <li>Lyss' Doublesided Darksaber</li>
        <li>Darth Grogu's Single Blade Saber</li>
        <li>Darth Grogu's Double Bladed Saber</li>
        <li>Freddy's Lightsaber</li>
        <li>Craze's Lightsaber</li>
        <li>Bumsaber</li>
      </ul>


      <div class="saber-challenge">
        <h4>Custom Saber Challenge</h4>

        <p>
          Be the <b>first person to complete the Lightsaber collection</b>,
          including both the Overkill and Non-Overkill versions of each
          applicable saber, and win your own <b>custom saber!</b>
        </p>

        <p>
          Achievement and Admin Sabers are <b>not required</b> to complete
          the challenge.
        </p>

        <p>
          Think you've completed it? Make a ticket and staff will verify
          your collection.
        </p>
      </div>

    </div>
  `
}

};


// =====================================================
// COLLECTIBLES CLICKABLE CARDS
// =====================================================

const collectiblesPanel =
  document.getElementById("collectibles-panel");

if (collectiblesPanel) {

  document
    .querySelectorAll("#collectibles .collectible-card")
    .forEach(btn => {

      btn.addEventListener("click", () => {

        const d =
          collectibleData[btn.dataset.collectible];

        if (!d) return;

        document
          .querySelectorAll("#collectibles .collectible-card")
          .forEach(b =>
            b.classList.remove("active")
          );

        btn.classList.add("active");

        document.getElementById(
          "collectibles-title"
        ).textContent = d.title;

        document.getElementById(
          "collectibles-content"
        ).innerHTML = d.html;

        collectiblesPanel.hidden = false;

        collectiblesPanel.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });

      });

    });


  const collectiblesClose =
    document.querySelector(
      "#collectibles-panel .collectibles-close"
    );

  if (collectiblesClose) {

    collectiblesClose.addEventListener("click", () => {

      collectiblesPanel.hidden = true;

      document
        .querySelectorAll("#collectibles .collectible-card")
        .forEach(b =>
          b.classList.remove("active")
        );

    });

  }

}
