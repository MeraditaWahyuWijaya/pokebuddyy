# Pokemon Explorer 🔥

Aplikasi React modern untuk menjelajahi dunia Pokemon dengan fitur pencarian, filter, dan detail lengkap setiap Pokemon.

## 🚀 Tech Stack

- **React 19** - Library JavaScript untuk membangun UI
- **Next.js 14** - Framework React dengan App Router
- **TypeScript** - Type safety dan developer experience yang lebih baik
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Library animasi untuk React
- **PokeAPI** - RESTful API untuk data Pokemon

## ✨ Fitur

### Fitur Minimum ✅
- ✅ **Halaman utama** dengan list Pokemon (151 Pokemon pertama)
- ✅ **Fitur pencarian** berdasarkan nama Pokemon
- ✅ **Filter berdasarkan tipe** Pokemon (Fire, Water, Grass, dll)
- ✅ **Halaman detail** dengan informasi lengkap Pokemon
- ✅ **Navigasi routing** antar halaman
- ✅ **Responsive design** untuk desktop & mobile

### Fitur Plus ⭐
- ✅ **Context API** untuk state management
- ✅ **Custom hooks** (useFilteredPokemon)
- ✅ **Animasi smooth** dengan Framer Motion
- ✅ **Loading states** dan error handling
- ✅ **TypeScript** untuk type safety
- ✅ **Struktur folder** yang rapi dan scalable
- ✅ **UI/UX modern** dengan gradient dan shadows
- ✅ **Optimized images** dengan lazy loading

## 📁 Struktur Folder

\`\`\`
pokemon-explorer/
├── app/                    # Next.js App Router
│   ├── pokemon/[id]/      # Dynamic route untuk detail Pokemon
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── pokemon-card.tsx
│   ├── search-filter.tsx
│   ├── loading-spinner.tsx
│   └── error-message.tsx
├── contexts/             # Context API
│   └── pokemon-context.tsx
├── hooks/               # Custom hooks
│   └── use-filtered-pokemon.ts
├── types/              # TypeScript types
│   └── pokemon.ts
├── utils/             # Utility functions
│   └── pokemon-utils.ts
└── README.md
\`\`\`

## 🛠️ Installation & Setup

1. **Clone repository**
   \`\`\`bash
   git clone <repository-url>
   cd pokemon-explorer
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open browser**
   Buka [http://localhost:3000](http://localhost:3000)

## 🎯 Cara Penggunaan

1. **Homepage**: Lihat daftar Pokemon dengan gambar dan tipe
2. **Search**: Ketik nama Pokemon di search bar
3. **Filter**: Pilih tipe Pokemon dari dropdown
4. **Detail**: Klik card Pokemon untuk melihat detail lengkap
5. **Navigation**: Gunakan tombol "Back" untuk kembali ke homepage

## 🎨 Design Highlights

- **Modern UI** dengan gradient backgrounds
- **Card-based layout** yang clean dan intuitive
- **Smooth animations** saat hover dan page transitions
- **Color-coded types** untuk mudah identifikasi
- **Responsive grid** yang adaptif di semua device
- **Loading states** yang engaging
- **Error handling** yang user-friendly

## 📱 Responsive Design

- **Mobile**: Single column layout dengan touch-friendly buttons
- **Tablet**: 2-3 columns dengan optimized spacing
- **Desktop**: 4-5 columns dengan hover effects

## 🔧 Technical Decisions

1. **Next.js App Router**: Untuk routing yang modern dan performant
2. **Context API**: State management yang simple tapi powerful
3. **TypeScript**: Type safety dan better developer experience
4. **Tailwind CSS**: Rapid styling dengan utility classes
5. **Framer Motion**: Smooth animations tanpa kompleksitas berlebih
6. **Custom Hooks**: Reusable logic untuk filtering Pokemon

## 🚀 Performance Optimizations

- **Lazy loading** untuk images
- **Memoized filtering** dengan useMemo
- **Optimized API calls** dengan Promise.all
- **Efficient re-renders** dengan proper state management

## 📊 API Integration

Menggunakan [PokeAPI](https://pokeapi.co/) untuk:
- List Pokemon (limit 151)
- Detail Pokemon individual
- Sprites dan artwork official
- Stats, abilities, dan informasi lengkap

---

**Dibuat dengan ❤️ menggunakan React dan TypeScript**
\`\`\`
