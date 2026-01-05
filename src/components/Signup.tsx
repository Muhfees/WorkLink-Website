import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { PhoneInput } from './ui/PhoneInput';
import { Link } from './Router';
import { Zap, Mail, User, Lock, ArrowRight, CheckCircle2 } from 'lucide-react';

export function Signup() {
    const [authMethod, setAuthMethod] = useState<'phone' | 'email'>('phone');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleGoogleSignup = () => {
        setIsLoading(true);
        // TODO: Implement Google OAuth
        console.log('Google signup clicked');
        setTimeout(() => setIsLoading(false), 1000);
    };

    const handlePhoneSignup = (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreeToTerms) {
            alert('Please agree to the terms and conditions');
            return;
        }
        setIsLoading(true);
        // TODO: Implement phone registration
        console.log('Phone signup:', { fullName, phoneNumber });
        setTimeout(() => setIsLoading(false), 1000);
    };

    const handleEmailSignup = (e: React.FormEvent) => {
        e.preventDefault();
        if (!agreeToTerms) {
            alert('Please agree to the terms and conditions');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        setIsLoading(true);
        // TODO: Implement email/password registration
        console.log('Email signup:', { fullName, email, password });
        setTimeout(() => setIsLoading(false), 1000);
    };

    const getPasswordStrength = (pwd: string) => {
        if (pwd.length === 0) return { strength: 0, label: '', color: '' };
        if (pwd.length < 6) return { strength: 1, label: 'Weak', color: 'bg-red-500' };
        if (pwd.length < 10) return { strength: 2, label: 'Fair', color: 'bg-yellow-500' };
        if (pwd.length < 14) return { strength: 3, label: 'Good', color: 'bg-blue-500' };
        return { strength: 4, label: 'Strong', color: 'bg-green-500' };
    };

    const passwordStrength = getPasswordStrength(password);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 py-12 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5">
                <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            {/* Signup Card */}
            <Card className="w-full max-w-md relative z-10 backdrop-blur-sm bg-card/95 border-primary/20 shadow-2xl">
                <CardHeader className="space-y-3 text-center">
                    <div className="flex justify-center mb-2">
                        <div className="bg-primary/10 p-3 rounded-full">
                            <Zap className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
                    <CardDescription className="text-base">
                        Join Worklink for trusted service solutions
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    {/* Google Sign Up */}
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full h-12 text-base font-medium hover:bg-accent transition-all duration-300 hover:scale-[1.02]"
                        onClick={handleGoogleSignup}
                        disabled={isLoading}
                    >
                        <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Continue with Google
                    </Button>

                    <div className="relative">
                        <Separator />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-3 text-sm text-muted-foreground">
                            or
                        </span>
                    </div>

                    {/* Auth Method Toggle */}
                    <div className="flex gap-2 p-1 bg-muted rounded-lg">
                        <Button
                            type="button"
                            variant={authMethod === 'phone' ? 'default' : 'ghost'}
                            className="flex-1 transition-all duration-300"
                            onClick={() => setAuthMethod('phone')}
                        >
                            Phone Number
                        </Button>
                        <Button
                            type="button"
                            variant={authMethod === 'email' ? 'default' : 'ghost'}
                            className="flex-1 transition-all duration-300"
                            onClick={() => setAuthMethod('email')}
                        >
                            Email
                        </Button>
                    </div>

                    {/* Phone Signup Form */}
                    {authMethod === 'phone' && (
                        <form onSubmit={handlePhoneSignup} className="space-y-4 animate-in fade-in duration-300">
                            <div className="space-y-2">
                                <Label htmlFor="fullname">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="fullname"
                                        type="text"
                                        placeholder="John Doe"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            <PhoneInput
                                value={phoneNumber}
                                onChange={setPhoneNumber}
                                label="Phone Number"
                                placeholder="77 123 4567"
                                required
                            />

                            <div className="flex items-start space-x-2">
                                <Checkbox
                                    id="terms"
                                    checked={agreeToTerms}
                                    onCheckedChange={(checked: boolean) => setAgreeToTerms(checked)}
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I agree to the{' '}
                                    <Link to="/terms" className="text-primary hover:underline">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link to="/privacy" className="text-primary hover:underline">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
                                disabled={isLoading || !agreeToTerms}
                            >
                                {isLoading ? 'Creating account...' : 'Create Account'}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </form>
                    )}

                    {/* Email Signup Form */}
                    {authMethod === 'email' && (
                        <form onSubmit={handleEmailSignup} className="space-y-4 animate-in fade-in duration-300">
                            <div className="space-y-2">
                                <Label htmlFor="signup-fullname">Full Name</Label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="signup-fullname"
                                        type="text"
                                        placeholder="John Doe"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="signup-email">Email Address</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="signup-email"
                                        type="email"
                                        placeholder="you@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="signup-password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="signup-password"
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                </div>
                                {password && (
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between text-xs">
                                            <span className="text-muted-foreground">Password strength:</span>
                                            <span className={`font-medium ${passwordStrength.strength === 1 ? 'text-red-500' :
                                                passwordStrength.strength === 2 ? 'text-yellow-500' :
                                                    passwordStrength.strength === 3 ? 'text-blue-500' :
                                                        'text-green-500'
                                                }`}>
                                                {passwordStrength.label}
                                            </span>
                                        </div>
                                        <div className="h-1 bg-muted rounded-full overflow-hidden">
                                            <div
                                                className={`h-full transition-all duration-300 ${passwordStrength.color}`}
                                                style={{ width: `${(passwordStrength.strength / 4) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        id="confirm-password"
                                        type="password"
                                        placeholder="••••••••"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="pl-10"
                                        required
                                    />
                                    {confirmPassword && password === confirmPassword && (
                                        <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-500" />
                                    )}
                                </div>
                            </div>

                            <div className="flex items-start space-x-2">
                                <Checkbox
                                    id="terms-email"
                                    checked={agreeToTerms}
                                    onCheckedChange={(checked: boolean) => setAgreeToTerms(checked)}
                                />
                                <label
                                    htmlFor="terms-email"
                                    className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    I agree to the{' '}
                                    <Link to="/terms" className="text-primary hover:underline">
                                        Terms of Service
                                    </Link>{' '}
                                    and{' '}
                                    <Link to="/privacy" className="text-primary hover:underline">
                                        Privacy Policy
                                    </Link>
                                </label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02]"
                                disabled={isLoading || !agreeToTerms}
                            >
                                {isLoading ? 'Creating account...' : 'Create Account'}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </form>
                    )}
                </CardContent>

                <CardFooter className="flex flex-col space-y-4">
                    <Separator />
                    <p className="text-center text-sm text-muted-foreground">
                        Already have an account?{' '}
                        <Link to="/login" className="text-primary font-medium hover:underline">
                            Sign in
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
