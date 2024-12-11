import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { createClient } from "@supabase/supabase-js";

if (!import.meta.env.VITE_SUPABASE_URL) {
  throw new Error("Missing VITE_SUPABASE_URL");
}

if (!import.meta.env.VITE_SUPABASE_ANON_KEY) {
  throw new Error("Missing VITE_SUPABASE_ANON_KEY");
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/app/upload`,
        },
      });
      if (error) throw error;
    } catch (error) {
      toast.error("Erro ao fazer login com Google");
    }
  };

  const handleGithubLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${window.location.origin}/app/upload`,
        },
      });
      if (error) throw error;
    } catch (error) {
      toast.error("Erro ao fazer login com GitHub");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-custom-dark p-4">
      <Card className="w-full max-w-md bg-custom-darker border-none">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-heading text-white">
            Bem-vindo de volta
          </CardTitle>
          <CardDescription className="text-gray-400">
            Faça login para continuar adaptando seus currículos
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 hover:bg-custom-accent hover:text-white transition-colors"
            onClick={handleGoogleLogin}
          >
            <Mail className="w-5 h-5" />
            Continuar com Google
          </Button>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 hover:bg-custom-accent hover:text-white transition-colors"
            onClick={handleGithubLogin}
          >
            <Github className="w-5 h-5" />
            Continuar com GitHub
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;