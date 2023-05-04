<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\CadastroAlRequest;
use Illuminate\Http\Request;
use App\Models\Aluno;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function cadastroAl(CadastroAlRequest $request) {
        $data = $request->validated();

        $aluno = Aluno::create([
            'nome'=> $data['nome'],
            'matricula'=> $data['matricula'],
            'email'=> $data['email'],
            'password'=> bcrypt($data['password'])
        ]);
        $token = $aluno->createToken('main')->plainTextToken;
        return response ([
            'aluno' => $aluno,
            'token' => $token
        ]);
    }

    public function login(LoginRequest $request) {
        $credentials = $request->validated();
        $remember = $credentials['remember'] ?? false;
        unset($credentials['remember']);

        if (!Auth::attempt($credentials, $remember)) {
            return response ([
                'error' => 'Credenciais incorretas'
            ], 442);
        }
        $aluno = Auth::aluno();
        $token = $aluno->createToken('main')->plainTextToken;

        return response ([
            'aluno' => $aluno,
            'token' => $token
        ]);

    }

    public function logout(Request $request) {
        $aluno = Auth::aluno();
        $aluno->currentAccessToken()->delete();

        return response([
            'success' => true
        ]);

    }
}
