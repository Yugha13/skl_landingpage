

const Footer = () => {
  return (
    <footer className="bg-secondary">
        <div className="container max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Kiudtech</h3>
              <p className="text-sm text-foreground/60">
                Empowering learners worldwide to achieve their goals through innovative education.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Tutorials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">About</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Terms</a></li>
                <li><a href="#" className="text-sm text-foreground/60 hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Kiudtech. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  )
}

export default Footer